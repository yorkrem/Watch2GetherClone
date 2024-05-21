import axios from "axios";

export const getVideo = (roomid) => {
    return axios.get('http://localhost:8000/room/getVideo', {
        params: {
            roomid: roomid
        }
    }).then((response) => {
        console.log(response);
        return response.data;
    }).catch((error) => {
        console.log(error);
        throw error;  // Ensure that the error is rethrown to be caught by the caller
    });
}
