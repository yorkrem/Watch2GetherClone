from room_init_ import rcache

class RoomManager:
        
    def addRoom(self, room):
        print("adding the room", room.getId())
        room_data = room.__dict__
        rcache.hset(room.getId(), mapping=room_data)
        
    def getRoom(self, id):
        room_data = rcache.hgetall(id)
        print(room_data)
        if room_data:
            return room_data
        return None
    
    def updateRoom(self, id, new_video, chat_messages=None):
        room_data = rcache.hgetall(id)
        if room_data:
            room_data['currentVideo'] = new_video
            rcache.hset(id, mapping=room_data)
            print(f"Updated current video for room {id}: {new_video}")
        else:
            print(f"Room {id} not found")
    
    

       
