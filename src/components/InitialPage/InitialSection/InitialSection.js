import React from 'react';
import {
  BannerSection,
  BannerContainer,
  BannerImage,
  InitialSectionSec,
  InitialSectionContainer,
  ProfileIcon,
  TextWrapper,
  WelcomeText,
  RoleText
} from './initialSection.elements';

const InitialSection = ({ isAuthenticated, bannerImage }) => {
  if (!isAuthenticated) {
    return (
      <BannerSection>
        <BannerContainer>
          <BannerImage
            src={bannerImage}
            alt="Banner de acesso"
          />
        </BannerContainer>
      </BannerSection>
    );
  }

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
