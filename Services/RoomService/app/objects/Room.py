class Room:
    def __init__(self, roomId: str, currentVideo: str):
        self.roomId = roomId
        self.currentVideo = currentVideo

    def getId(self):
        return self.roomId
    