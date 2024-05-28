from objects.account import Account
from managers.AccountManager import AccountManager
from flask import request, make_response
from _init_ import create_app, db
from extensions.hash import checkPassword

app = create_app()
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
    return "account created " + str(account.getUsername())

@app.route('/login', methods= ['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    account = accountManager.getAccount(username=username)
    correctPassword = checkPassword(account=account, password=password)
    if account is not None and correctPassword:
        return account

if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5001)