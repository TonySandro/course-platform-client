import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  display: flex; 
  justify-content: space-between;
  background-color: #faf3e0;
  padding: 0 2rem;
  height: 70px;
  overflow: visible;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const NavBarx = styled.nav`
  position: relative;
  z-index: 999;      
  overflow: visible; 
  background-color: #faf3e0;
  height: 60px;
  padding: 0 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 180px;  
`;

export const SearchBar = styled.div`
  flex: 0 0 auto;
  width: 250px;
  position: relative;

  input {
    width: 100%;
    padding: 0.625rem 1rem 0.625rem 2.5rem;
    border-radius: 20px;
    border: 1px solid #ced4da;
    outline: none;
    font-size: 1rem;
    color: #212529;
  }

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #6c757d;
  }

  input::placeholder {
    color: #6c757d;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 0.9rem;
    color: #212529;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.25rem;
  color: #212529;
  cursor: pointer;
  &:hover {
    color: #000;
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

export const LoginButton = styled.button`
  background: linear-gradient(135deg, #fff, #f8f8ff);
  color: #6c63ff;
  border: 2px solid #6c63ff;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #f0efff, #e8e8ff);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

export const SignUpButton = styled.button`
  background: linear-gradient(135deg, #6c63ff, #5750d3);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #5750d3, #4d47b8);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;
