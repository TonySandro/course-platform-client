import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7da2ff;
  padding: 10px 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  
  &::before {
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
`;

export const SearchBar = styled.div`
  flex-grow: 1;
  margin: 0 20px;
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    padding-left: 40px;
    border-radius: 25px;
    border: none;
    outline: none;
    font-size: 16px;
  }

  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 20px;
  cursor: pointer;
`;

export const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
  position: relative;

  &::after {
    content: " ";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: absolute;
  }
`;