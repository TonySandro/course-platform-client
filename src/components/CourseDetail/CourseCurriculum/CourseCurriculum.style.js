import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const CurriculumSection = styled.section`
  background-color: #fff;
  padding: 2rem 0;
  color: #212529;
`;

export const CurriculumContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CurriculumHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurriculumTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const CurriculumInfo = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0.5rem 0 0 0;
`;

export const ExpandLink = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionItem = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 6px;
  overflow: hidden;  
`;

export const SectionHeader = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const SectionHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SectionTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: #212529;
`;

export const SectionMeta = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
`;

export const ChevronDownIcon = styled(FaChevronDown)`
  color: #6c757d;
  font-size: 0.75rem;
`;

export const ChevronUpIcon = styled(FaChevronUp)`
  color: #6c757d;
  font-size: 0.75rem;
`;

export const LessonsContainer = styled.div`
  padding: 0.75rem 1rem;
  background-color: #fdfdfd;  
  border-top: 1px solid #dee2e6;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LessonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LessonTitle = styled.div`
  font-size: 0.9rem;
  color: #212529;
`;

export const LessonLink = styled.a`
  font-size: 0.85rem;
  color: #007bff;
  text-decoration: none;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LessonDuration = styled.span`
  font-size: 0.85rem;
  color: #6c757d;
  margin-right: 1rem;
`;
