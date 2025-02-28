import React from 'react';
import InitialSection from '../../components/InitialPage/InitialSection/InitialSection';
import YourCourses from '../../components/InitialPage/YourCourses/YourCourses';
import { CourseObject, CourseObject1, CourseObject2, CourseObject3, CourseObject4, CourseObject5 } from './Data';

function Catalog() {
  return (
    <div>
      <InitialSection />
      <YourCourses courses={[CourseObject, CourseObject1, CourseObject2, CourseObject3, CourseObject4, CourseObject5]} />
    </div>
  );
}

export default Catalog;