import axios from "axios";

export const updateroom = (roomid, youtubelink) => {
    const data = {
        roomid: roomid,
        currentvideo: youtubelink
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