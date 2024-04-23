from flask_socketio import SocketIO
from flask_cors import CORS, cross_origin

socketio = SocketIO(cors_allowed_origins="*", path="/account")