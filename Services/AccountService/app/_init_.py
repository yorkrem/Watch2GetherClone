from flask import Flask, render_template, request
from firebase_admin import credentials, auth
import firebase_admin

#db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"
    return app

app = create_app()
cred = credentials.Certificate("../credentials/firebasecreds.json")
firebase_admin.initialize_app(cred)