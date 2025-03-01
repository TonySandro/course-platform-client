import styled from 'styled-components';
import { Container } from '../../../globalStyles';

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

/* Agrupamento "O que você aprenderá" e "Este curso inclui" */
export const LearningGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const InfoBlock = styled.div`
  flex: 1;
`;

export const BlockTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #212529;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "•"; 
    color: #6c757d;
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    line-height: 1;
  }
`;

/* Bloco para "Conteúdo do curso" */
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

/* Link "Expandir todas as seções" */
export const ExpandLink = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
