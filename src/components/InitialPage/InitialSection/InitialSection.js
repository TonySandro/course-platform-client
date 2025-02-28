import React from "react";
import { SectionContainer, ProfileIcon, WelcomeText, RoleText } from "./initialSection.elements";

const InitialSection = () => {
  return (
    <SectionContainer>
      <ProfileIcon>TS</ProfileIcon>
      <div>
        <WelcomeText>Bem-vindo(a) de volta, Tony</WelcomeText>
        <RoleText>Desenvolvedor(a) de web back-end</RoleText>
      </div>
    </SectionContainer>
  );
};

export default InitialSection;
