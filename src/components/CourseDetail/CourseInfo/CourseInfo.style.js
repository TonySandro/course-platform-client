import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const CourseSection = styled.section`
  background-color: rgb(18, 24, 38);
  color: #fff;
  height: 330px;
  padding: 4.5rem 0;
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
`;

export const CourseRightColumn = styled.div`
  flex: 0 0 320px; 
  margin-top: 2rem;

  @media (min-width: 992px) {
    margin-top: 0; 
  }
`;

export const CourseTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CourseDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #e2e2e2;
`;

export const Creator = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.25rem;

  span {
    color: #fff;
    font-weight: 500;
  }
`;

export const UpdateInfo = styled.p`
  font-size: 0.9rem;
  color: #ccc;
`;
