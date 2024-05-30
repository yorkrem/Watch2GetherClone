from flask import jsonify, request
from firebase_admin import auth
from _init_ import app #, db

@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    id_token = data.get('idToken')
    if not id_token:
        return jsonify({'error': 'ID token is missing'}), 400
    try:
        decoded_token = auth.verify_id_token(id_token)
        user_id = decoded_token['uid']
        return jsonify({'message': 'Token is valid', 'user_id': user_id}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 401
    
if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5001)