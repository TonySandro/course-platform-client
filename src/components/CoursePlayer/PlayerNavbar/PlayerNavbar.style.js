import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #101522; /* Tom de azul-escuro */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem; /* Ajuste conforme necessário */
  color: #fff;     /* Texto em branco */

  /* Se quiser navbar fixa no topo, descomente:
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  */
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  white-space: nowrap; /* Evita quebrar o nome em telas menores */
`;

export const CourseTitle = styled.div`
  /* Limita o título a 50% da largura, corte com reticências se exceder */
  max-width: 50%;
  font-size: 0.9rem;
  color: #cfcfcf;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.85rem;
  color: #cfcfcf;
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
