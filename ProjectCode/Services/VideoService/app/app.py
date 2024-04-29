from _init_ import create_app, socketio
app = create_app()

socketio.run(app, host='0.0.0.0', port=5003, allow_unsafe_werkzeug=True)
