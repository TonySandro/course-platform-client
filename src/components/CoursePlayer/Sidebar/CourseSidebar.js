import React, { useState } from 'react';
import {
    SidebarContainer,
    SidebarHeader,
    HeaderTitle,
    CloseIcon,
    SidebarContent,
    SectionItem,
    SectionHeader,
    SectionHeaderLeft,
    SectionTitle,
    SectionSummary,
    ChevronDownIcon,
    ChevronUpIcon,
    LessonList,
    LessonItem,
    LessonLeft,
    CheckIcon,
    UncheckIcon,
    LessonTitle,
    LessonDuration
} from './CourseSidebar.style';


const CourseSidebar = ({ sections: initialSections = [], onClose }) => {
    const [sections, setSections] = useState(initialSections);
    const [expandedSections, setExpandedSections] = useState([0]);

    const toggleSection = (index) => {
        if (expandedSections.includes(index)) {
            setExpandedSections(expandedSections.filter((i) => i !== index));
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    const toggleLessonCompleted = (sIndex, lIndex) => {
        const newSections = [...sections];
        const newLessons = [...newSections[sIndex].lessons];

        newLessons[lIndex] = {
            ...newLessons[lIndex],
            completed: !newLessons[lIndex].completed
        };

        const oldCompleted = newSections[sIndex].lessons.filter((l) => l.completed).length;
        const newCompleted = oldCompleted + (newLessons[lIndex].completed ? 1 : -1);

        newSections[sIndex] = {
            ...newSections[sIndex],
            lessons: newLessons,
            completed: newCompleted
        };

        setSections(newSections);
    };

    return (
        <SidebarContainer>
            <SidebarHeader>
                <HeaderTitle>Conteúdo do curso</HeaderTitle>
                <CloseIcon onClick={onClose} />
            </SidebarHeader>

            <SidebarContent>
                {sections.map((section, sIndex) => {
                    const isExpanded = expandedSections.includes(sIndex);
                    return (
                        <SectionItem key={sIndex}>
                            <SectionHeader onClick={() => toggleSection(sIndex)}>
                                <SectionHeaderLeft>
                                    <SectionTitle>{section.title}</SectionTitle>
                                    <SectionSummary>
                                        {section.completed} / {section.totalLessons} | {section.totalDuration}
                                    </SectionSummary>
                                </SectionHeaderLeft>
                                {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </SectionHeader>

                            {isExpanded && (
                                <LessonList>
                                    {section.lessons.map((lesson, lIndex) => (
                                        <LessonItem
                                            key={lesson.id}
                                            onClick={() => toggleLessonCompleted(sIndex, lIndex)}
                                        >
                                            <LessonLeft>
                                                {lesson.completed ? <CheckIcon /> : <UncheckIcon />}
                                                <LessonTitle>
                                                    {lesson.number}. {lesson.title}
                                                </LessonTitle>
                                            </LessonLeft>
                                            <LessonDuration>{lesson.duration}</LessonDuration>
                                        </LessonItem>
                                    ))}
                                </LessonList>
                            )}
                        </SectionItem>
                    );
                })}
            </SidebarContent>
        </SidebarContainer>
    );
};

export default CourseSidebar;
