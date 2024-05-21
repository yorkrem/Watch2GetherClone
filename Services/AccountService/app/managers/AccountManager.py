class AccountManager:
    accounts = []

    def addAccount(self, account):
       self.accounts.append(account)
        
    def getAccount(self, username):
        for account in self.accounts.values():
            if account.getUsername() == username:
                return account