import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #101522;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.div`
  flex: 0 0 auto;
  width: 350px;
  position: relative;
  margin-left: auto;
  padding-right: 1rem;

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

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 0.9rem;
    color: #fff;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 1.25rem;
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
  position: relative;
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
  background: linear-gradient(135deg, #6c63ff, #5750d0);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #5750d0, #4d47b8);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;
