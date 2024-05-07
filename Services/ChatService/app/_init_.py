from flask import Flask, render_template, request
from events import socketio


def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"

    #app.register_blueprint(main)

    socketio.init_app(app)

    return app