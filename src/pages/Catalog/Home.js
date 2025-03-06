import React, { useState } from 'react';
import InitialSection from '../../components/InitialPage/InitialSection/InitialSection';
import YourCourses from '../../components/InitialPage/YourCourses/YourCourses';
import { CourseObject, CourseObject1, CourseObject2, CourseObject3, CourseObject4, CourseObject5 } from './Data';
import AllCourses from '../../components/InitialPage/AllCourses/AllCourses';
import InitialNavBar from '../../components/InitialNavBar/InitialNavBar';

function Catalog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <InitialNavBar isAuthenticated={isAuthenticated} />
      {isAuthenticated && <InitialSection />}
      {isAuthenticated && <YourCourses courses={[CourseObject, CourseObject1, CourseObject2, CourseObject3, CourseObject4, CourseObject5]} />}

      <AllCourses courses={[CourseObject, CourseObject1]} />
    </div>
  );
}

export default Catalog;