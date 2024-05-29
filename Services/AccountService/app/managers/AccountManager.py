from _init_ import app, db
from objects.account import Account

class AccountManager:
    def __init__(self):
        self.accounts = self.load_accounts()
        
    def addAccount(self, account):
       self.accounts.append(account)
        
    def getAccount(self, username):
        for account in self.accounts:
            if account.getUsername() == username:
                return account

    def load_accounts(self):
        with app.app_context():
            accounts = Account.query.all()
        return accounts

