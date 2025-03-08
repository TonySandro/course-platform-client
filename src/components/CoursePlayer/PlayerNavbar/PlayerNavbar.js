import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logoImg from '../../../images/logo_retangular.png';
import {
  NavbarContainer,
  CourseTitle,
  ProgressContainer,
  LogoContainer,
  LogoImage,
} from './PlayerNavbar.style';

const PlayerNavbar = ({ courseTitle = 'Título do Curso' }) => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src={logoImg} alt="logo" />
      </LogoContainer>

      <CourseTitle>{courseTitle}</CourseTitle>

      <ProgressContainer>
        Seu progresso <FaChevronDown size={12} />
      </ProgressContainer>
    </NavbarContainer>
  );
};

export default PlayerNavbar;
