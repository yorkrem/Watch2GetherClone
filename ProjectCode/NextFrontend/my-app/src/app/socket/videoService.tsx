import { io } from "socket.io-client";

const socket = io("http://localhost:8000/video", {
    transports: ["websocket"],
    autoConnect: false,
    withCredentials: true
});

export default socket;