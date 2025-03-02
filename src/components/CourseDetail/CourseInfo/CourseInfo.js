import React from 'react';
import {
  CourseSection,
  CourseContainer,
  CourseLeftColumn,
  CourseRightColumn,
  CourseTitle,
  CourseDescription,
  Creator,
  UpdateInfo
} from './CourseInfo.style';
import CoursePurchaseCard from '../CoursePurchaseCard/CoursePurchaseCard';

const CourseInfo = ({ course }) => {
  return (
    <CourseSection>
      <CourseContainer>
        <CourseLeftColumn>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseDescription>{course.description}</CourseDescription>
          <Creator>
            Criado por <span>Ana Paula Lima Duarte</span>
          </Creator>
          <UpdateInfo>Última atualização em {course.updatedAt}</UpdateInfo>
        </CourseLeftColumn>

        <CourseRightColumn>
          <CoursePurchaseCard
            imageUrl={course.imageUrl}
            newPrice={course.price}
          />
        </CourseRightColumn>
      </CourseContainer>
    </CourseSection>
  );
};

export default CourseInfo;
