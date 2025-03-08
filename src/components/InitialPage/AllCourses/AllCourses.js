import React from 'react';
import {
  AllCoursesSec,
  AllCoursesContainer,
  CoursesTitle,
  CoursesRow,
  CourseCard,
  CourseImage,
  CardBody,
  CourseTitle,
  CoursePrice,
  CourseDescription,
} from './AllCourses.style';

const AllCourses = ({ courses = [] }) => {
  return (
    <AllCoursesSec>
      <AllCoursesContainer>
        <CoursesTitle>Cursos disponiveis</CoursesTitle>
        
        <CoursesRow>
          {courses.map((course) => (
            <CourseCard key={course.id}>
              <CourseImage src={course.imageUrl} alt={course.title} />

              <CardBody>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>{course.description}</CourseDescription>
                <CoursePrice>R$ {course.price}</CoursePrice>
              </CardBody>
            </CourseCard>
          ))}
        </CoursesRow>
      </AllCoursesContainer>
    </AllCoursesSec>
  );
};

export default AllCourses;
