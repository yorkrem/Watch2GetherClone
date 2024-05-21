import axios from "axios";

export const createroom = (roomid, youtubelink) => {
    const data = {
        roomid: roomid,
        currentvideo: "https://www.youtube.com/watch?v=KJwYBJMSbPI"
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
