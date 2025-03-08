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
import logoImg from '../../images/logo_retangular.png';
import { Link } from 'react-router-dom'

const InitialNavBar = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <LogoContainer>
        <LogoImage src={logoImg} alt="logo" />
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
          <Link to='/login'> 
            <LoginButton>Fazer login</LoginButton>
          </Link>
          <Link to='/sign-up'> 
            <SignUpButton>Cadastre-se</SignUpButton>
          </Link>
          </>
        )}
      </RightContainer>
    </NavBar>
  );
};

export default InitialNavBar;
