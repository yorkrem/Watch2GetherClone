"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import socket from '../../socket/videoService';
import {getVideo} from '../../requests/getVideo'

function YoutubeVideo ({ youtubelink , roomid}) {
    const playerRef = useRef(null);
    const [skipTimestamp, setSkipTimestamp] = useState(0);
    const [playing, setPlaying] = useState(true)
    const [youtubeurl, Setyoutubeurl] = useState("https://www.youtube.com/watch?v=KJwYBJMSbPI")

    useEffect(()=> {
        checkLink()
    },[])

    useEffect(()=>{
        Setyoutubeurl(youtubelink)
    }, [youtubelink])

    useEffect(() => {
        socket.on("interactionlistener", (data)=>{
            if(data["event"] == "play"){
                if(playing == false){
                    playVideo(data["time"]) 
                }
            }
            else if(data["event"] == "pause"){
                if(playing == true){
                    pauseVideo(data["time"])
                }
            }
        })
        return () => {
            socket.off("interactionlistener");
        };
    },[playing])
  
    const handleSeek = ({ playedSeconds }) => {
        setSkipTimestamp(playedSeconds)
    };
  
    function checkLink(){
        var roomlink =  getVideo(roomid)
        console.log(youtubelink)
        if(roomlink != null){
            Setyoutubeurl(roomlink)
        }
    }
    checkLink()

    const sendPlayInteraction = () => {
        socket.emit('video', {event:"play", time:skipTimestamp, room:roomid})
        setPlaying(true);
    }

    const sendPauseInteraction = () => {
        socket.emit('video', {event:"pause", time:skipTimestamp, room:roomid})
        setPlaying(false);
    }

    const playVideo = (time) => {
        if(playerRef.current){
            playerRef.current.getInternalPlayer()?.seekTo(time);
            playerRef.current.getInternalPlayer()?.playVideo()
        }
    }

    const pauseVideo = (time) => {
        if(playerRef.current){
            playerRef.current.getInternalPlayer()?.seekTo(time);
            playerRef.current.getInternalPlayer()?.pauseVideo()
        }
    }


    return (
        <Container className='h-full'>
            {youtubelink && 
                <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%" 
                url={youtubeurl}
                controls={true}
                onProgress={handleSeek}
                //onSeek={handleSeek}
                onPlay={sendPlayInteraction}
                onPause={sendPauseInteraction}
                playing={playing}
                muted={true}
                //onError={playVideo}
            />}
        </Container>
      
    );
}

export default YoutubeVideo;
