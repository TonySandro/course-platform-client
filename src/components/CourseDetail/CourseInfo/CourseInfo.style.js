import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const CourseSection = styled.section`
  background-color:rgb(18, 24, 38);
  padding: 4.5rem 0;
  color: #fff;
`;

export const CourseContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const CourseLeftColumn = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const CourseTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CourseSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #e2e2e2;
`;

export const CourseInfo = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 1rem;
`;
