from flask_socketio import SocketIO

socketio = SocketIO(cors_allowed_origins="http://localhost:3000", cors_credentials=True, path="/video")
