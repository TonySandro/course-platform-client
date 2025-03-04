import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import {
  NavbarContainer,
  Logo,
  CourseTitle,
  ProgressContainer,
} from './PlayerNavbar.style';

const PlayerNavbar = ({ courseTitle = 'Título do Curso' }) => {
  return (
    <NavbarContainer>
      {/* Nome do site / Logo */}
      <Logo>AnaPsico</Logo>

      {/* Título do curso */}
      <CourseTitle>{courseTitle}</CourseTitle>

      {/* Botão de progresso */}
      <ProgressContainer>
        Seu progresso <FaChevronDown size={12} />
      </ProgressContainer>
    </NavbarContainer>
  );
};

export default PlayerNavbar;
