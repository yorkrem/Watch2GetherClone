from sqlalchemy import Column, Integer, String
from _init_ import db

class Account(db.Model):
    __tablename__ = 'accounts'
    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(120), nullable=False, unique=True)
    password = Column(String(120), nullable=False)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def getUsername(self):
        return self.username
