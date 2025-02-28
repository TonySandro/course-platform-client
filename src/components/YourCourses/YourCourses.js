import React, { useRef } from 'react';
import {
  CoursesSec,
  CoursesContainer,
  Title,
  SliderWrapper,
  Slider,
  PrevButton,
  NextButton,
  CourseCard,
  PlayIconWrapper,
  CardFooter,
  CardTitle,
  CardSubtitle
} from './YourCourses.elements';

const PlayIcon = () => <i className="fas fa-play-circle"></i>;

const YourCourses = ({ courses }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <CoursesSec>
      <CoursesContainer>
        <Title>Seus cursos</Title>
        
        <SliderWrapper>
          <PrevButton onClick={scrollLeft}>
            <i className="fas fa-chevron-left"></i>
          </PrevButton>

          <Slider ref={sliderRef}>
            {courses.map((course, index) => (
              <CourseCard key={course.id} bgImage={course.imageUrl} >
                <PlayIconWrapper>
                  <PlayIcon />
                </PlayIconWrapper>

                <CardFooter>
                  <CardTitle>{`${index + 1}. ${course.title}`}</CardTitle>
                  <CardSubtitle>{`Abrir - ${course.duration || 4} min`}</CardSubtitle>
                </CardFooter>
              </CourseCard>
            ))}
          </Slider>

          <NextButton onClick={scrollRight}>
            <i className="fas fa-chevron-right"></i>
          </NextButton>
        </SliderWrapper>

      </CoursesContainer>
    </CoursesSec>
  );
};

export default YourCourses;
