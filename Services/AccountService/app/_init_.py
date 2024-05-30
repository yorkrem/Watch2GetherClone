from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from firebase_admin import credentials, auth
import firebase_admin

#db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"
    #app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:example@localhost:5432/watch2gether'
    #app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    #db.init_app(app)
    return app

app = create_app()
cred = credentials.Certificate("../credentials/firebasecreds.json")
firebase_admin.initialize_app(cred)