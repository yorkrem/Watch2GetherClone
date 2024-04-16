import { io, Socket } from "socket.io-client";

const socket: Socket = io("ws://localhost:8000", {
    path: '/video',
    autoConnect: false,
    withCredentials: true,
});

export default socket;
