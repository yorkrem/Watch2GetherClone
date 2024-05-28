from objects.account import Account
from managers.AccountManager import AccountManager
from flask import request, make_response
from _init_ import app, db
from extensions.hash import checkPassword

accountManager = AccountManager()

@app.route('/create', methods= ['POST'])
def createAccount():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    account = Account(username=username, email=email, password=password)
    accountManager.addAccount(account=account)
    db.session.add(account)
    db.session.commit()
    return str(account.getUsername())

@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    account = accountManager.getAccount(username=username)
    if account is not None:
        if checkPassword(account=account, password=password):
            return str(account.getUsername())
        else:
            return "The password you have entered is not correct"
    else:
        return "Account does not exist"

if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5001)