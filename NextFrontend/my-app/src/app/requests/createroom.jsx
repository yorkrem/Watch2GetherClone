import axios from "axios";

export const createroom = (roomid, youtubelink) => {
    const data = {
        roomid: roomid,
        currentvideo: youtubelink
    };
    axios.post('http://localhost:8000/room/create', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    });
}
