import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledKnowledgePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 90%;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  div {
    &:first-child {
      border-right: 3px solid #c4ab9d;

      @media (max-width: 1080px) {
        border-right: none;
        border-bottom: 3px solid #c4ab9d;
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  font-size: 5rem;

  &:hover {
    color: #6b5854;
  }

  @media (max-width: 640px) {
  }
`;
