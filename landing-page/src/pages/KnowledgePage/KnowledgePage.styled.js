import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ComponentWrapper } from '../../utils/UniversalStyledElements';
import { Colors } from '../../utils/Colors';

export const PageWrapper = styled(ComponentWrapper)`
  justify-content: space-between;
  width: 100%;
  max-width: 100%;

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
      border-right: 3px solid ${Colors.primaryFontColor};

      @media (max-width: 1080px) {
        border-right: none;
        border-bottom: 3px solid ${Colors.primaryFontColor};
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
  color: ${Colors.primaryFontColor};
  font-size: 5rem;

  &:hover {
    color: #6b5854;
  }

  @media (max-width: 640px) {
  }
`;
