import axios from "axios";
import { getToken } from "../../utils/localStorage";

export const createroom = async (roomid) => {
    const data = {
        roomid: roomid,
        currentvideo: "https://www.youtube.com/watch?v=KJwYBJMSbPI"
    };
    return axios.post('http://localhost:8000/room/create', data, {
        headers: {
            'Authorization': "Bearer " + getToken(),
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response
    }).catch((error)=> {
        console.log(error)
    });
}
