import React from 'react';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';

interface YoutubeVideoProps {
    youtubelink: string | null;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ youtubelink }) => {
    function checkLink(){
        if(youtubelink == ""){
            youtubelink = "https://www.youtube.com/watch?v=zGSqG0vkBxo"
        }
    }
    checkLink()
    return (
        <Container className='h-full'>
           {youtubelink && <ReactPlayer width="100%" height="100%" url={youtubelink} controls />}
        </Container>
    );
}

export default YoutubeVideo;
