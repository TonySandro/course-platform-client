import React from 'react'; 
import CourseSidebar from '../../components/CoursePlayer/Sidebar/CourseSidebar';
import { sections } from './Data';

function CoursePlayer() {
  return (
    <div>
        <CourseSidebar sections={sections} />
    </div>
  );
}

export default CoursePlayer;