"use client"
import { useEffect, useState } from "react";
import socket from "./videoService";
import axios from "axios";


const useSocketSetup = () => {
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

        socket.on("messageresponse", (msg)=>{
            console.log(msg);
        })
        //sendMessage()
    }, []);

    const sendMessage = () => {
        if (socket) {
            console.log("message sent")
            socket.emit('message', 'Hello from React!');
        }
    };

}

export default useSocketSetup;
