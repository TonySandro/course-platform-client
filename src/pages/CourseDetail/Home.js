import React from 'react';
import CourseInfos from '../../components/CourseDetail/CourseInfo/CourseInfo';
import { CourseObject } from '../Catalog/Data';

function CourseDetail() {
  return (
    <div>
      <CourseInfos course={CourseObject} />
    </div>
  );
}

export default CourseDetail;