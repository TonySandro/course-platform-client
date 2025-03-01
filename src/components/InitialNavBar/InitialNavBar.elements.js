import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #101522;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: #fff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SearchBar = styled.div`
  flex: 0 0 auto;
  width: 250px;
  position: relative;

  input {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem 2.5rem;
    border-radius: 20px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 1rem;
    color: #333;
    background-color: #fff;
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }

  input::placeholder {
    color: #888;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

export const ProfileIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #343a40;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
