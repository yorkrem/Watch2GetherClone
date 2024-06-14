import axios from "axios";

export const updateroom = (roomid, youtubelink, chatmessages) => {
    const data = {
        roomid: roomid,
        currentvideo: youtubelink,
        chatmessages: chatmessages
    };
    axios.put('http://localhost:8000/room/update', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    });
}