import styled from 'styled-components';

export const NavbarContainer = styled.nav`
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 180px;  
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap;
`;

export const CourseTitle = styled.div`
  max-width: 50%;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  color:rgb(0, 0, 0);
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  svg {
    margin-left: 5px;
  }
`;
