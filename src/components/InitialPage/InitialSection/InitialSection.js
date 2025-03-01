import React from 'react';
import {
  InitialSectionSec,
  InitialSectionContainer,
  ProfileIcon,
  TextWrapper,
  WelcomeText,
  RoleText
} from './initialSection.elements';

const InitialSection = () => {
  return (
    <InitialSectionSec>
      <InitialSectionContainer>
        <ProfileIcon>TS</ProfileIcon>
        <TextWrapper>
          <WelcomeText>Bem-vindo(a) de volta, Tony</WelcomeText>
          <RoleText>Bons estudos!</RoleText>
        </TextWrapper>
      </InitialSectionContainer>
    </InitialSectionSec>
  );
};

export default InitialSection;
