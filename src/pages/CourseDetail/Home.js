import React from 'react';
import CourseInfos from '../../components/CourseDetail/CourseInfo/CourseInfo';
import CourseContent from '../../components/CourseDetail/CourseContent/CourseContent';
import { courseObject } from './Data';

function CourseDetail() {
  return (
    <div>
      <CourseInfos course={courseObject} />
      <CourseContent course={courseObject}/>
    </div>
  );
}

export default CourseDetail;