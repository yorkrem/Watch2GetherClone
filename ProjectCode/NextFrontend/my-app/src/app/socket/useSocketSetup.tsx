"use client"
import { useEffect } from "react";
import socket from "./videoSocket";

const useSocketSetup = (): void => {
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

export default useSocketSetup;
