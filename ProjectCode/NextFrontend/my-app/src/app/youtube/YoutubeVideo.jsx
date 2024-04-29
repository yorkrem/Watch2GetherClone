import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';

function YoutubeVideo ({ youtubelink }) {
    const playerRef = useRef(null);
    const [volume, setVolume] = useState(0.5)
    const [seekTo, setSeekTo] = useState(0);

    const [seeking, setSeeking] = useState(false);
    const [skipTimestamp, setSkipTimestamp] = useState(0);
  
    const handleProgress = ({ playedSeconds }) => {
      if (!seeking) {
        // Handle the progress here
        console.log('Current Time:', playedSeconds);
      }
    };
  
    const handleSeek = ({ playedSeconds }) => {
      setSeeking(true);
      // Set the timestamp when seeking
      setSkipTimestamp(playedSeconds);
      console.log('Current Time 2:', playedSeconds);

    };
  
    const handleSeeked = ({ playedSeconds }) => {
      setSeeking(false);
      // Do something after seeking is finished, if needed
      console.log('Current Time 3:', playedSeconds);

    };

    function checkLink(){
        if(youtubelink == ""){
            youtubelink = "https://www.youtube.com/watch?v=zGSqG0vkBxo"
        }
    }
    checkLink()



    const applySeek = () => {
        if (playerRef.current) {
            playerRef.current.getInternalPlayer()?.seekTo(seekTo, 'seconds');
        }
    };

    const seek = ( { playedSeconds }) => {
        console.log("seconds: " + playedSeconds);
    }

    return (
        <Container className='h-full'>
            {youtubelink && 
                <ReactPlayer
                ref={playerRef}
                width="100%"
                height="100%" 
                url={youtubelink}
                controls
                onProgress={handleProgress}
                onSeek={handleSeek}
                onSeeked={handleSeeked}
                onPlay={()=>{console.log("playing")}}
            />}
        </Container>
    );
}

export default YoutubeVideo;
