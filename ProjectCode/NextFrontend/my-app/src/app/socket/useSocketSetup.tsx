"use client"
import { useEffect, useState } from "react";
import socket from "./videoService";
import axios from "axios";

const useSocketSetup = (): void => {
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

        axios
        .get("http://localhost:8000/video/hello")
        .then(function (response) {
          console.log(response);
        });

        // Clean up function
        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, []);

    const sendMessage = () => {
        if (socket) {
            socket.emit('message', 'Hello from React!');
        }
    };

}

export default useSocketSetup;
