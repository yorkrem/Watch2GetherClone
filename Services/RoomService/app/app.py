from flask import request, make_response
from _init_ import create_app
from objects.Room import Room
from managers.RoomManager import RoomManager

app = create_app()
Roommanager = RoomManager()

@app.route('/create', methods= ['POST'])
def createRoom():
    data = request.get_json()
    roomid = data.get('roomid')
    currentvideo = data.get('currentvideo')
    print("this is waht i receive in post", roomid)
    print("this is the video i receive", currentvideo)
    room = Room(roomId=roomid, currentVideo=currentvideo)
    Roommanager.addRoom(room=room)
    return "room created"
    
@app.route('/getVideo', methods= ['GET'])
def getVideo():
    roomid = request.args.get('roomid')
    room = Roommanager.getRoom(roomid)
    print(roomid)
    print(room)
    if room is not None:
        return str(room.getVideo())
    else:
        return ({'error': 'Room not found'}), 404


if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5002)