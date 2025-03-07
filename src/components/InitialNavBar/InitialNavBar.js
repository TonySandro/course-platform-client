import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  NavBar,
  LogoContainer,
  LogoImage,
  SearchBar,
  RightContainer,
  UserSection,
  CartIcon,
  ProfileIcon,
  LoginButton,
  SignUpButton
} from './InitialNavBar.elements';
import img from '../../images/logo_retangular.png';

const InitialNavBar = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <LogoContainer>
        <LogoImage src={img} alt="Logo do Projeto" />
      </LogoContainer>

      <RightContainer>
        <SearchBar>
          <FaSearch />
          <input type="text" placeholder="Pesquisar" />
        </SearchBar>

        {isAuthenticated ? (
          <UserSection>
            <span>Meu aprendizado</span>
            <CartIcon />
            <ProfileIcon>TS</ProfileIcon>
          </UserSection>
        ) : (
          <>
            <LoginButton>Fazer login</LoginButton>
            <SignUpButton>Cadastre-se</SignUpButton>
          </>
        )}
      </RightContainer>
    </NavBar>
  );
};

export default InitialNavBar;
