import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  NavBar,
  Logo,
  SearchBar,
  UserSection,
  CartIcon,
  ProfileIcon,
  LoginButton,
  SignUpButton
} from './InitialNavBar.elements';

const InitialNavBar = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <Logo>AnaPsico</Logo>

      <SearchBar>
        <FaSearch />
        <input type="text" placeholder="Pesquisar por qualquer coisa" />
      </SearchBar>

      <UserSection>
        {isAuthenticated && (
          <>
            <span>Meu aprendizado</span>
            <CartIcon />
            <ProfileIcon>TS</ProfileIcon>
          </>
        )}

        {!isAuthenticated && (
          <>
            <LoginButton>Fazer login</LoginButton>
            <SignUpButton>Cadastre-se</SignUpButton>
          </>
        )}
      </UserSection>
    </NavBar>
  );
};

export default InitialNavBar;
