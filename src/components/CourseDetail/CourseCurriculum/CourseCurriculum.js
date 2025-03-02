import React, { useState } from 'react';
import {
  CurriculumSection,
  CurriculumContainer,
  CurriculumHeader,
  CurriculumTitle,
  CurriculumInfo,
  ExpandLink,
  SectionList,
  SectionItem,
  SectionHeader,
  SectionHeaderLeft,
  SectionTitle,
  SectionMeta,
  ChevronDownIcon,
  ChevronUpIcon,
  LessonsContainer,
  LessonItem,
  LessonTitle,
  LessonLink,
  LessonDuration
} from './CourseCurriculum.style';

const CourseCurriculum = ({ data }) => {
  const { totalSections, totalLessons, totalDuration, sections } = data;
  const [expandedSections, setExpandedSections] = useState([]);
  const allExpanded = expandedSections.length === sections.length;

  const handleToggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  const handleExpandAll = () => {
    if (allExpanded) {
      setExpandedSections([]);
    } else {
      const allIndices = sections.map((_, idx) => idx);
      setExpandedSections(allIndices);
    }
  };

  return (
    <CurriculumSection>
      <CurriculumContainer>

        <CurriculumHeader>
          <div>
            <CurriculumTitle>Conteúdo do curso</CurriculumTitle>
            <CurriculumInfo>
              {totalSections} seções • {totalLessons} aulas • Duração total: {totalDuration}
            </CurriculumInfo>
          </div>

          <ExpandLink onClick={handleExpandAll}>
            {allExpanded ? 'Recolher todas as seções' : 'Expandir todas as seções'}
          </ExpandLink>
        </CurriculumHeader>

        <SectionList>
          {sections.map((sec, idx) => {
            const isExpanded = expandedSections.includes(idx);
            const lessonsCount = sec.lessons?.length || 0;

            return (
              <SectionItem key={idx}>
                <SectionHeader onClick={() => handleToggleSection(idx)}>
                  <SectionHeaderLeft>
                    <SectionTitle>{sec.title}</SectionTitle>
                    <SectionMeta>
                      {lessonsCount} aulas • {sec.duration}
                    </SectionMeta>
                  </SectionHeaderLeft>
                  {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </SectionHeader>

                {isExpanded && (
                  <LessonsContainer>
                    {sec.lessons.map((lesson, lIdx) => (
                      <LessonItem key={lIdx}>
                        <LessonTitle>{lesson.title}</LessonTitle>
                        <div>
                          <LessonDuration>{lesson.duration}</LessonDuration>
                          <LessonLink href={lesson.link}>Visualizar</LessonLink>
                        </div>
                      </LessonItem>
                    ))}
                  </LessonsContainer>
                )}
              </SectionItem>
            );
          })}
        </SectionList>
      </CurriculumContainer>
    </CurriculumSection>
  );
};

export default CourseCurriculum;
