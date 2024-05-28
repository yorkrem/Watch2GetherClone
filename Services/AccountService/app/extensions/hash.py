from bcrypt import hashpw, gensalt, checkpw
accountManager = AccountManager()

# Hash a password
def hashPassword(password):
    salt = gensalt()
    hashed_password = hashpw(password, salt)
    return hashed_password


def checkPassword(account, password):
    hashed_password = account.getPassword()
    is_correct = checkpw(password, hashed_password)
    return is_correct
