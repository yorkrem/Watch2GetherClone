import axios from "axios";

export const createroom = (roomid, youtubelink) => {
    const data = {
        roomid: roomid,
        currentvideo: youtubelink
    };
    axios.post('http://localhost:8000/createroom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}