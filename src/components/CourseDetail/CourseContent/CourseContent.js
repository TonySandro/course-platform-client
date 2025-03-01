import React from 'react';
import {
  ContentSection,
  ContentContainer,
  LearningGrid,
  InfoBlock,
  BlockTitle,
  List,
  ListItem,
  CourseCurriculumBlock,
  CurriculumTitle,
  CurriculumDescription,
  ExpandLink
} from './CourseContent.style';

const CourseContent = ({ course }) => {
  return (
    <ContentSection>
      <ContentContainer>
        {/* O que você aprenderá & Este curso inclui */}
        <LearningGrid>
          <InfoBlock>
            <BlockTitle>O que você aprenderá</BlockTitle>
            <List>
              {course.whatYouWillLearn.map((item, idx) => (
                <ListItem key={idx}>{item}</ListItem>
              ))}
            </List>
          </InfoBlock>

          <InfoBlock>
            <BlockTitle>Este curso inclui</BlockTitle>
            <List>
              {course.includes.map((inc, idx) => (
                <ListItem key={idx}>{inc}</ListItem>
              ))}
            </List>
          </InfoBlock>
        </LearningGrid>

        {/* Conteúdo do curso */}
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
