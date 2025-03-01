import React from 'react';
import {
  CourseSection,
  CourseContainer,
  CourseLeftColumn,
  CourseTitle,
  CourseSubtitle,
  CourseInfo
} from './CourseInfo.style';
import CoursePurchaseCard from '../CoursePurchaseCard/CoursePurchaseCard';

const CourseInfos = ({ course }) => {
  return (
    <CourseSection>
      <CourseContainer>
        <CourseLeftColumn>
          <CourseTitle>{course.title}</CourseTitle>
          <CourseSubtitle>{course.description}</CourseSubtitle>
          <CourseInfo>Última atualização em {course.updateAt}</CourseInfo>
        </CourseLeftColumn>

        <CoursePurchaseCard
          previewImage={course.imageUrl}
          price={course.price}
          discountInfo={course.discountInfo}
        />
      </CourseContainer>
    </CourseSection>
  );
};

export default CourseInfos;
