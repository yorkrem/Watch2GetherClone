import os
from flask import Flask, json, render_template, request
from firebase_admin import credentials, auth
import firebase_admin
from dotenv import load_dotenv

if 'GITHUB_ACTIONS' in os.environ:
    # Running in GitHub Actions, load Firebase config from secret
    firebase_config = os.getenv('FIREBASE_CONFIG')
else:
    # Running locally, load Firebase config from .env file
    from dotenv import load_dotenv
    load_dotenv()
    firebase_config = os.getenv('FIREBASE_CONFIG')
    
firebase_config_json = json.loads(firebase_config)

def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"
    
    return app

app = create_app()
cred = credentials.Certificate(firebase_config_json)
firebase_app = firebase_admin.initialize_app(cred)
