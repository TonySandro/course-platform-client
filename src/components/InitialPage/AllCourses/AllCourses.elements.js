import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const AllCoursesSec = styled.section`
  padding: 2rem 0;

`;

export const AllCoursesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const CoursesTitle = styled.h2`
  font-size: 1.8rem;
  color: #212529;
  margin-bottom: 1.5rem;
`;

export const CoursesRow = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  margin-bottom: 1rem;
  scroll-behavior: smooth;


  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CourseCard = styled.div`
  flex: 0 0 auto;
  width: 220px;
  min-height: 280px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #ddd;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
`;

export const CardBody = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const CourseTitle = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0 0.25rem 0;
  color: #333;
  line-height: 1.2;
`;

export const CoursePrice = styled.p`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const CourseDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
  line-height: 1.3;
`;