// VideoPlayerStyles.js
import styled from 'styled-components';

export const PlayerContainer = styled.div`
  position: relative;
  width: calc(100% - 320px);
  margin-right: 320px; 
  background-color: #000; 
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 550px;
  max-height:100vh;
  overflow: hidden;
  z-index: auto;
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;
