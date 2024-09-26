import React from 'react';
import styled from 'styled-components';
import bannervdo from '../images/backgroundbanner.webm';
const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Make sure the video is behind other content */
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  margin-top:-90px;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
`;

function VideoBackgroundComponent() {
  return (
    <VideoBackground>
      <Video autoPlay muted loop>
        <source src={bannervdo}type="video/webm" />
        Your browser does not support the video tag.
      </Video>
    </VideoBackground>
  );
}

export default VideoBackgroundComponent;
