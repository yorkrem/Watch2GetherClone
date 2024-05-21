from objects.account import Account
from managers.AccountManager import AccountManager
from flask import request, make_response
from _init_ import create_app, db

app = create_app()
accountManager = AccountManager()

@app.route('/create', methods= ['POST'])
def createAccount():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    print("username ", username)
    print("email ", email)
    print("password ", password)
    account = Account(username=username, email=email, password=password)
    accountManager.addAccount(account=account)
    db.session.add(account)
    db.session.commit()
    return "account created " + str(account.getUsername())

if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5001)