import styled from 'styled-components';
import { FaTimes, FaChevronDown, FaChevronUp, FaCheckSquare, FaRegSquare } from 'react-icons/fa';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 70px; 
  right: 0;
  width: 320px;
  height: calc(100vh - 70px);

  background-color: #fff;
  border-left: 1px solid #dee2e6;
  box-shadow: -2px 0 6px rgba(0,0,0,0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;


export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #dee2e6;
  background-color: #f8f9fa;
  font-size: 1rem;
  font-weight: 600;
  color: #212529;
`;

export const HeaderTitle = styled.span``;

export const CloseIcon = styled(FaTimes)`
  font-size: 1rem;
  color: #6c757d;
  cursor: pointer;
  &:hover {
    color: #212529;
  }
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

export const SectionItem = styled.div`
  border-bottom: 1px solid #dee2e6;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const SectionHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SectionTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #212529;
`;

export const SectionSummary = styled.span`
  font-size: 0.8rem;
  color: #6c757d;
`;

export const ChevronDownIcon = styled(FaChevronDown)`
  color: #6c757d;
  font-size: 0.75rem;
`;

export const ChevronUpIcon = styled(FaChevronUp)`
  color: #6c757d;
  font-size: 0.75rem;
`;

export const LessonList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LessonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #212529;
  cursor: pointer;
  padding: 0.25rem 0;
  border-left: 3px solid transparent;
  &:hover {
    background-color: #f8f9fa;
  }
`;

export const LessonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckIcon = styled(FaCheckSquare)`
  color: #6c63ff;
  font-size: 1rem;
`;

export const UncheckIcon = styled(FaRegSquare)`
  color: #6c63ff;
  font-size: 1rem;
`;

export const LessonTitle = styled.span`
  font-size: 0.85rem;
  color: #212529;
`;

export const LessonDuration = styled.span`
  font-size: 0.75rem;
  color: #6c757d;
  margin-left: 1rem;
`;
