import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  border-top: 1px solid brown;
  border-bottom: 1px solid brown;
  background-color: white;
  height: 6rem;
`;

export const StyledListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const StyledListElement = styled.div`
  flex-grow: 1;
  text-align: center;
  height: 100%;

  &:hover {
    background-color: #bfc190;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  height: 83%;
  text-decoration: none;
  font-size: 1.2rem;
  color: brown;
  padding-top: 1rem;

  &.active {
    background-color: #bfc190;
  }
`;

export const StyledP = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;
