import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 9rem;
  width: 100%;
  background-color: white;

  z-index: 5;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  padding: 2rem 0rem;
  align-self: center;
  cursor: pointer;
`;

export const StyledLogo = styled.img`
  object-fit: contain;
  flex-grow: 1;
  width: 300px;
  margin-right: 1rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.03);
    }
`;

export const NavLink = styled(Link)`

`;
