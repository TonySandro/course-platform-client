import React from 'react';
import { PlayerContainer, VideoFrame } from './VideoPlayer.style';

const VideoPlayer = ({ videoUrl }) => {
  const defaultVideo = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <PlayerContainer>
      <VideoFrame
        src={videoUrl || defaultVideo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video Player"
      />
    </PlayerContainer>
  );
};

export default VideoPlayer;
