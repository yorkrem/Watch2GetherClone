from flask import request, make_response
from _init_ import create_app

app = create_app()

if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5002)