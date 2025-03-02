import React from 'react';
import {
  ContentSection,
  ContentContainer,
  LearningWrapper,
  BlockTitle,
  LearnListGrid,
  LearnListItem,
  CheckIcon,
  CourseCurriculumBlock,
  CurriculumTitle,
  CurriculumDescription,
  ExpandLink
} from './CourseContent.style';

const CourseContent = ({ course }) => {
  return (
    <ContentSection>
      <ContentContainer>

        {/* Box: O que você aprenderá */}
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

        <CourseCurriculumBlock>
          <CurriculumTitle>Conteúdo do curso</CurriculumTitle>
          <CurriculumDescription>{course.curriculum}</CurriculumDescription>
          <ExpandLink href="#expand-all">Expandir todas as seções</ExpandLink>
        </CourseCurriculumBlock>

      </ContentContainer>
    </ContentSection>
  );
};

export default CourseContent;
