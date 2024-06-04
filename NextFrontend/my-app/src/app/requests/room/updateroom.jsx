import axios from "axios";
import { getToken } from "../../utils/localStorage";

export const updateroom = (roomid, youtubelink) => {
    const data = {
        roomid: roomid,
        currentvideo: youtubelink
    };
    axios.put('http://localhost:8000/room/update', data, {
        headers: {
            'Authorization': "Bearer " + getToken(),
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    });
}