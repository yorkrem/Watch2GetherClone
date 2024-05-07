from flask import request
from _init_ import create_app
from objects.Room import Room

app = create_app()

@app.route('/createroom', methods= ['POST'])
def createRoom():
    data = request.get_json()
    roomid = data.get('roomid')
    currentvideo = data.get('currentvideo')
    room = Room(roomId=roomid, currentVideo=currentvideo)
    return room
    

if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5000, allow_unsafe_werkzeug=True)