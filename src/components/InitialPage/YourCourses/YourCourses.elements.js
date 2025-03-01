import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const CoursesSec = styled.section`
  padding: 2rem 0;
  position: relative;
`;

export const CoursesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #212529;
  margin-bottom: 1.5rem;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem;

    &::-webkit-scrollbar {
    display: none;
  }
  
  scrollbar-width: none;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffffaa;
  border: none;
  cursor: pointer;
  z-index: 2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s ease;

  &:hover {
    background: #fff;
  }

  i {
    font-size: 1.2rem;
    color: #333;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 0;
`;

export const NextButton = styled(NavButton)`
  right: 0;
`;

export const CourseCard = styled.div`
  flex: 0 0 auto;
  width: 220px;
  height: 120px;
  background-color: #343a40; 
  color: #fff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  background: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  ::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

`;

export const PlayIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  i {
    font-size: 2rem;
    color: #fff;
    opacity: 0.8;
  }
`;

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem;
`;

export const CardTitle = styled.p`
  font-size: 0.95rem;
  margin: 0;
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  font-size: 0.8rem;
  margin: 0;
  color: #ccc;
`;
