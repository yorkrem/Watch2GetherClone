from _init_ import create_app, socketio
from events import send_message

app = create_app()
send_message()

socketio.run(app, host='0.0.0.0', port=5001, allow_unsafe_werkzeug=True)
