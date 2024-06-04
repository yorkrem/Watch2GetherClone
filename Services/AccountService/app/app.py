<<<<<<< HEAD
from flask import request, make_response
from _init_ import create_app
=======
from flask import jsonify, request
from firebase_admin import auth
from _init_ import app #, db
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14

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
    app.run(host="0.0.0.0", port=5000)

<<<<<<< HEAD


if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5002)
=======
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
