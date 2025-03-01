import styled from 'styled-components';
import { Container } from '../../../globalStyles';

export const InitialSectionSec = styled.section`
  background-color: #fff;  
  padding: 1rem 0;
`;

export const InitialSectionContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #343a40;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeText = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #212529;
  margin: 0;
`;

export const RoleText = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  margin: 0.25rem 0 0 0;
`;
