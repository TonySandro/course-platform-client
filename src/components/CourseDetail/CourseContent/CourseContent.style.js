import styled from 'styled-components';
import { Container } from '../../../globalStyles';
import { FaCheck } from 'react-icons/fa';

export const ContentSection = styled.section`
  background-color: #fff;
  padding: 2rem 0;
  color: #212529;
`;

export const ContentContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const LearningWrapper = styled.div`
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1.5rem;

  width: 70%;
  max-width: 700px;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const BlockTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #212529;
`;

export const LearnListGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 2rem;
  list-style: none;
  padding-left: 0;
  margin: 0;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckIcon = styled(FaCheck)`
  color: #0f766e; 
  margin-right: 0.5rem;
`;

export const LearnListItem = styled.li`
  display: flex;
  align-items: flex-start;
  font-size: 0.95rem;
  color: #212529;
  margin-bottom: 0.5rem;
`;

export const CourseCurriculumBlock = styled.div`
  flex: 1;
`;

export const CurriculumTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const CurriculumDescription = styled.p`
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: #666;
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
