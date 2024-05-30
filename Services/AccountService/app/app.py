#from objects.account import Account
#from managers.AccountManager import AccountManager
from flask import jsonify, request
from firebase_admin import auth
from _init_ import app #, db

#accountManager = AccountManager()

#@app.route('/create', methods= ['POST'])
#def createAccount():
    #data = request.get_json()
    #username = data.get('username')
    #email = data.get('email')
    #password = data.get('password')
    #account = Account(username=username, email=email, password=password)
    #accountManager.addAccount(account=account)
    #db.session.add(account)
    #db.session.commit()
    #return str(account.getUsername())

@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    id_token = data.get('idToken')
    try:
        decoded_token = auth.verify_id_token(id_token)
        user_id = decoded_token['uid']
        return jsonify({'message': 'Token is valid', 'user_id': user_id}), 200
    except auth.InvalidIdTokenError:
        return jsonify({'error': 'Invalid token'}), 401
    
if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5001)