"use client"
import { useEffect, useState } from "react";
import socket from "./videoService";
import axios from "axios";


const useSocketSetup = (id) => {
    const [room, setRoom] = useState(id);
    useEffect(() => {
        // Establish WebSocket connection to Kong
        // Set up event listeners
        socket.connect();

        socket.on('connect', () => {
            console.log('Connected to video service via Kong.');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from video service via Kong.');
        });

        socket.on("connect_error", (err) => {
            // the reason of the error, for example "xhr poll error"
            console.log("error message:" + err.message + err.cause);
        });

        socket.emit('join', {room: room});
        
    }, []);

    useEffect(()=>{
        socket.emit('join', { room: room });
        // Cleanup when component unmounts
        return () => {
            socket.emit('leave', { room: room });
           // socket.disconnect();
        };
    },[room])
}

export default useSocketSetup;
