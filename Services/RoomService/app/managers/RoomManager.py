class RoomManager:
    rooms = {}

    def addRoom(self, room):
        self.rooms[room.getId()] = room
        print("adding the room", room.getId())
        
    def getRoom(self, id):
        for room in self.rooms.values():
            print("room id for each ", room.getId())
            if room.getId() == id:
                return room
    
    

       