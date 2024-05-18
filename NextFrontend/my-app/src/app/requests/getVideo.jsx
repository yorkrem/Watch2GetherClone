import axios from "axios";

export const getVideo = (roomid) => {
    axios.get('http://localhost:8000/room/getVideo', {
        params: {
            roomid: roomid
        }
    }).then((response) => {
        console.log(response)
    }).catch((error)=> {
        console.log(error)
    });
}