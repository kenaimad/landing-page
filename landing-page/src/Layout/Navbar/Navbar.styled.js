import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: blue;
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
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
`


