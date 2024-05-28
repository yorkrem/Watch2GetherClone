from bcrypt import hashpw, gensalt, checkpw

# Hash a password
def hashPassword(password):
    encoded_pw = password.encode('utf-8')
    salt = gensalt()
    hashed_password = hashpw(encoded_pw, salt)
    return hashed_password.decode('utf-8')

def checkPassword(account, password):
    encoded_pw = password.encode('utf-8')
    hashed_password = account.getPassword().encode('utf-8')
    is_correct = checkpw(encoded_pw, hashed_password)
    return is_correct


