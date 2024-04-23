from _init_ import create_app, socketio
app = create_app()

@app.route('/hello')
def hello_world():
    return 'Hello, World!'

socketio.run(app, host='0.0.0.0', port=5000, allow_unsafe_werkzeug=True)
