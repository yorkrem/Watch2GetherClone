import { io } from "socket.io-client";

const socket = io("http://localhost:8000", {
    transports: ["websocket"],
    autoConnect: false,
    withCredentials: true,
    upgrade: true
});

export default socket;