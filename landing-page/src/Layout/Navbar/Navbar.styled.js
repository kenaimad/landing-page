import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const StyledNavContainer = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  border-top: 1px solid #c4ab9d;
  border-bottom: 1px solid #c4ab9d;
  background-color: white;
  height: 6rem;
  z-index: 5;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    p {
      margin: 0;
    }

    &:hover {
      color: #c4ab9d;
    }

  }

  @media (max-width: 640px) {
    justify-content: space-between;
  }
`;

export const StyledListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 640px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 90vh;
    width: 100vw;
    margin-top: 6rem;
  }
`;

export const StyledListElement = styled.div`
  flex-grow: 1;
  text-align: center;
  height: 100%;
  transition: all 0.1s ease-in;
  display: table-cell;
  vertical-align: middle;

  &:hover {
    background-color: #f7ebe5;
  }

  @media (max-width: 640px) {
    border-top: 1px solid #c4ab9d;

    &:hover {
      background-color: white;
    }
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  font-size: 1.2rem;
  color: #c4ab9d;

  &.active {
    background-color: #f7ebe5;
  }

  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      background-color: white;
      color: black;
    }
  }
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

export const StyledP = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
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

export const LogoWrapper = styled.div`
  padding-top: 0.9rem;
  text-align: center;
  width: 10vw;
  min-width: 100px;

  img {
    padding-top: 0.5rem;
    object-fit: contain;
    align-self: center;
    width: 100px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;

export const BurgerWrapper = styled.div`
  padding-top: 0.9rem;
  text-align: center;
  width: 10vw;
  min-width: 100px;

  img {
    padding-top: 0.5rem;
    object-fit: contain;
    align-self: center;
    width: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  @media (min-width: 640px) {
    display: none;
  }
`;
