import os
from flask import Flask, json, render_template, request
from firebase_admin import credentials, auth
import firebase_admin
from dotenv import load_dotenv
import redis

load_dotenv()
firebase_config = os.getenv('FIREBASE_CONFIG')
firebase_config_json = json.loads(firebase_config)
#db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"
    return app

app = create_app()
cred = credentials.Certificate(firebase_config_json)
firebase_admin.initialize_app(cred)
rcache = redis.Redis(host='localhost', port=6379, decode_responses=True)