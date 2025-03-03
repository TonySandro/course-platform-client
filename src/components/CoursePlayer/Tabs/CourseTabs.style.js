import styled from 'styled-components';

export const TabsContainer = styled.div`
  background-color: #fff;
  padding: 1rem 2rem;
  color: #212529;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TabNav = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #dee2e6;
`;

export const TabItem = styled.button`
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ active }) => (active ? '#212529' : '#6c757d')};
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #212529;
  }

  &::after {
    content: "";
    display: block;
    height: 2px;
    background-color: ${({ active }) => (active ? '#5624d0' : 'transparent')};
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  }
`;

export const TabContent = styled.div`
  min-height: 80px;
  padding: 0.5rem 0;
`;

export const CourseTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CourseInfoRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.9rem;
  color: #6c757d;
`;

export const CourseLastUpdate = styled.div`
  font-size: 0.9rem;
  color: #6c757d;
  margin-top: 0.5rem;
`;
