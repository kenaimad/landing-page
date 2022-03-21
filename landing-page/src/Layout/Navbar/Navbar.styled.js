import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  position: sticky;
  top: 0;
  border-top: 1px solid #c4ab9d;
  border-bottom: 1px solid #c4ab9d;
  background-color: white;
  height: 6rem;
`;

export const StyledListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 635px;
  align-items: center;

  a{
    text-decoration: none;
  }
`;

export const StyledListElement = styled.div`
  flex-grow: 1;
  text-align: center;
  height: 100%;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: #f7ebe5;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  height: 83%;
  text-decoration: none;
  font-size: 1.2rem;
  color: #c4ab9d;
  padding-top: 1rem;

  &.active {
    background-color: #f7ebe5;
  }
`;

export const StyledP = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  display: flex;
  padding-top: 0.9rem;
  text-align: center;
  flex-direction: column;
  width: 10vw;
  min-width: 100px;
  transition: all 0.3s ease-in;
  //flex-grow: 1;

  p {
    font-size: 0.7rem;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
  }


`;

export const StyledIcon = styled.img`
  object-fit: contain;
  align-self: center;
  width: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.2);
  }


`;
