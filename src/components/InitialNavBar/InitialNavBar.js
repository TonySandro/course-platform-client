import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  NavBar,
  Logo,
  SearchBar,
  UserSection,
  CartIcon,
  ProfileIcon
} from './InitialNavBar.elements';

const InitialNavBar = () => {
  return (
    <NavBar>
      <Logo>AnaPsico</Logo>
      <UserSection>
        <SearchBar>
          <FaSearch />
          <input type="text" placeholder="Pesquisar por qualquer coisa" />
        </SearchBar>
        <span>Meu aprendizado</span>
        <CartIcon />
        <ProfileIcon>TS</ProfileIcon>
      </UserSection>
    </NavBar>
  );
};

export default InitialNavBar;
