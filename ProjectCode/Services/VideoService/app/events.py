from flask_socketio import emit, send
from extensions import socketio

@socketio.on("connect")
def handle_connect():
    print("Client connected")

@socketio.on("connecton_error")
def handle_error(err):
    print("eror when connecting")
    print(err.req)
    print(err.code)
    print(err.message)
    print(err.context)

@socketio.on('message')
def handle_message(data):
    print('received message: ' + data)
    send_message()

def send_message():
    socketio.emit("messageresponse", "this is me sending from flask", broadcast=True)
    print("message sent")

@socketio.on('video')
def handle_videointeraction(event):
    if(event == "play"):
        socketio.emit("interactionlistener", "play", broadcast=True)
        print("interaction sent")