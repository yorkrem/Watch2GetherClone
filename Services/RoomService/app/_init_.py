from flask import Flask, render_template, request

def create_app():
    app = Flask(__name__)
    app.config["DEBUG"] = True
    app.config["SECRET_KEY"] = "secret"

    #app.register_blueprint(main)

    return app