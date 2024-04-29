"use client"
<<<<<<< HEAD
import { useEffect } from "react";
import socket from "./videoSocket";

const useSocketSetup = () => {
    useEffect(() => {
        socket.connect();
        socket.on("connect_error", () => {
            console.log("error when connecting");
        });
        return () => {
            socket.off("connect_error");
        };
    }, []);
};
=======
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

        axios
        .get("http://localhost:8000/hello")
        .then(function (response) {
          console.log(response);
        });

        sendMessage()
    }, []);

    const sendMessage = () => {
        if (socket) {
            console.log("message sent")
            socket.emit('message', 'Hello from React!');
        }
    };

}
>>>>>>> wsconnection

export default useSocketSetup;
