<<<<<<< HEAD
=======
from authorization.authorization import check_auth
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
from flask import request, make_response
from _init_ import create_app
from objects.Room import Room
from managers.RoomManager import RoomManager

app = create_app()
Roommanager = RoomManager()

@app.route('/create', methods= ['POST'])
<<<<<<< HEAD
=======
@check_auth 
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
def createRoom():
    data = request.get_json()
    roomid = data.get('roomid')
    currentvideo = data.get('currentvideo')
    print("this is what i receive in post", roomid)
    print("this is the video i receive", currentvideo)
    room = Room(roomId=roomid, currentVideo=currentvideo)
    Roommanager.addRoom(room=room)
    return "room created"
    
@app.route('/getVideo', methods= ['GET'])
<<<<<<< HEAD
=======
@check_auth 
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
def getVideo():
    roomid = request.args.get('roomid')
    room = Roommanager.getRoom(roomid)
    print("getting room " + str(room.getVideo()))
    if room is not None:
        return str(room.getVideo())
    else:
        return ({'error': 'Room not found'}), 404


@app.route('/update', methods= ['PUT'])
<<<<<<< HEAD
=======
@check_auth 
>>>>>>> 1a1627f439c5d4f88eb7a3a1615f1189fdd26d14
def updateRoom():
    data = request.get_json()
    roomid = data.get('roomid')
    currentvideo = data.get('currentvideo')
    room = Roommanager.getRoom(roomid)
    room.updateVideo(currentvideo)
    print("room after update " + room.getVideo())
    return "room updated " + currentvideo



if __name__ == '__main__':  # specify your desired port number here
    app.run(host="0.0.0.0", port=5002)