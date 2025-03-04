import React from 'react';
import CourseSidebar from '../../components/CoursePlayer/Sidebar/CourseSidebar';
import { CourseData, sections } from './Data';
import VideoPlayer from '../../components/CoursePlayer/VideoPlayer/VideoPlayer';
import CourseTabs from '../../components/CoursePlayer/Tabs/CourseTabs';
import PlayerNavbar from '../../components/CoursePlayer/PlayerNavbar/PlayerNavbar';

function CoursePlayer() {
  return (
    <div>
      <PlayerNavbar courseTitle='Aprenda Go (Golang) do zero ao avançado 100% na prática e com suporte!' />
      <CourseSidebar sections={sections} />
      <VideoPlayer videoUrl="https://www.youtube.com/embed/vL52_D2lNoY" />
      <CourseTabs courseData={CourseData} />
    </div>
  );
}

export default CoursePlayer;