import React from 'react'; 
import CourseSidebar from '../../components/CoursePlayer/Sidebar/CourseSidebar';
import { CourseData, sections } from './Data';
import VideoPlayer from '../../components/CoursePlayer/VideoPlayer/VideoPlayer';
import CourseTabs from '../../components/CoursePlayer/Tabs/CourseTabs';

function CoursePlayer() {
  return (
    <div>
        <CourseSidebar sections={sections} />
        <VideoPlayer videoUrl="https://www.youtube.com/embed/vL52_D2lNoY" />
        <CourseTabs courseData={CourseData} />
    </div>
  );
}

export default CoursePlayer;