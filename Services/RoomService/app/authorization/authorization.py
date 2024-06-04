from functools import wraps
from flask import request, jsonify
from firebase_admin import auth

def check_auth(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        if not request.headers.get('Authorization'):
            return jsonify({'error': 'Authorization header missing'}), 403

        token = request.headers['Authorization'].split('Bearer ')[-1]
        try:
            decoded_token = auth.verify_id_token(token)
            request.user = decoded_token
        except Exception as e:
            return jsonify({'error': str(e)}), 403

        return f(*args, **kwargs)
    return decorator
