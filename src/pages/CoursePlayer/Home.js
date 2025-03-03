import React from 'react'; 
import CourseSidebar from '../../components/CoursePlayer/Sidebar/CourseSidebar';
import { sections } from './Data';
import VideoPlayer from '../../components/CoursePlayer/VideoPlayer/VideoPlayer';

function CoursePlayer() {
  return (
    <div>
        <CourseSidebar sections={sections} />
        <VideoPlayer videoUrl="https://www.youtube.com/embed/vL52_D2lNoY" />
    </div>
  );
}

export default CoursePlayer;