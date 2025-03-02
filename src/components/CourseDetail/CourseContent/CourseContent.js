import React from 'react';
import {
  ContentSection,
  ContentContainer,
  LearningWrapper,
  BlockTitle,
  LearnListGrid,
  LearnListItem,
  CheckIcon
} from './CourseContent.style';

const CourseContent = ({ course }) => {
  return (
    <ContentSection>
      <ContentContainer>

        <LearningWrapper>
          <BlockTitle>O que você aprenderá</BlockTitle>
          <LearnListGrid>
            {course.whatYouWillLearn.map((item, idx) => (
              <LearnListItem key={idx}>
                <CheckIcon />
                {item}
              </LearnListItem>
            ))}
          </LearnListGrid>
        </LearningWrapper>

      </ContentContainer>
    </ContentSection>
  );
};

export default CourseContent;
