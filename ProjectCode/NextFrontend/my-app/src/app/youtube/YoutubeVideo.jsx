"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import socket from '../socket/videoService';

function YoutubeVideo ({ youtubelink }) {
    const playerRef = useRef(null);
    const [skipTimestamp, setSkipTimestamp] = useState(0);
    const [playing, setPlaying] = useState(true)

    useEffect(() => {
        console.log(playing)
        socket.on("interactionlistener", (msg)=>{
            console.log("receiving")
            if(msg == "play"){
                console.log(playing)
                if(playing == false){
                    playVideo() 
                }
            }
        })
        return () => {
            socket.off("interactionlistener");
        };
    },[playing])
  
    const handleSeek = ({ playedSeconds }) => {
        // Handle the progress here
        console.log('Current Time:', playedSeconds);
        setSkipTimestamp(playedSeconds)
    };
  

    function checkLink(){
        if(youtubelink == ""){
            youtubelink = "https://www.youtube.com/watch?v=zGSqG0vkBxo"
        }
    }
    checkLink()


    const sendPlayInteraction = () => {
        console.log("sending play")
        socket.emit('video', "play")
        setPlaying(true);
    }

    const sendPauseInteraction = () => {
        console.log("sending pause")
        socket.emit('video', "pause")
        setPlaying(false);
    }


    const playVideo = () => {
        if(playerRef.current){
            playerRef.current.getInternalPlayer()?.seekTo(skipTimestamp);
            playerRef.current.getInternalPlayer()?.playVideo()
        }
    }

    return (
        <Container className='h-full'>
            {youtubelink && 
                <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%" 
                url={youtubelink}
                controls={true}
                //onProgress={handleProgress}
                onSeek={handleSeek}
                onPlay={sendPlayInteraction}
                onPause={()=> {setPlaying(false)}}
                playing={playing}
                muted={true}
                //onError={playVideo}
            />}
        </Container>
      
    );
}

export default YoutubeVideo;
