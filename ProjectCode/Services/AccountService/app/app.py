from _init_ import create_app, socketio
from events import send_message

app = create_app()

socketio.run(app, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)
