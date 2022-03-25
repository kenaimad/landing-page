import { useState } from 'react';
import {
  StyledNavContainer,
  StyledListContainer,
  StyledListElement as Element,
  NavLink,
  StyledP,
  IconWrapper,
  StyledIcon,
  BurgerWrapper,
  LogoWrapper,
} from './Navbar.styled';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAfterClick = () => {
    if (document.documentElement.clientWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <StyledNavContainer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/dobrzeje.m/?fbclid=IwAR18n-bY48KQVcn52aWjXrA1qhNYjf_2KBdEBYwL42NVLZVaARNlVwblLjs"
      >
        <IconWrapper>
          <StyledIcon
            src={require('./icons/ig-icon.png')}
            alt="Instagram Icon"
          ></StyledIcon>
          <p>dobrzeje.m</p>
        </IconWrapper>
      </a>
      <StyledListContainer open={isOpen} onClick={closeMenuAfterClick}>
        <Element>
          <NavLink to="/">
            <StyledP>Strona główna</StyledP>
          </NavLink>
        </Element>
        <Element>
          <NavLink to="about">
            <StyledP>O mnie</StyledP>
          </NavLink>
        </Element>
        <Element>
          <NavLink to="knowledge">
            <StyledP>Baza wiedzy</StyledP>
          </NavLink>
        </Element>
        <Element>
          <NavLink to="offer">
            <StyledP>Oferta</StyledP>
          </NavLink>
        </Element>
        <Element>
          <NavLink to="contact">
            <StyledP>Kontakt</StyledP>
          </NavLink>
        </Element>
      </StyledListContainer>
      <LogoWrapper>
        <img src={require('../LogoBar/logo2.png')} alt="Logo Icon"></img>
      </LogoWrapper>
      {!isOpen ? (
        <BurgerWrapper onClick={toggleIsOpen}>
          <img
            src={require('./icons/burger-icon.png')}
            alt="Instagram Icon"
          ></img>
        </BurgerWrapper>
      ) : (
        <BurgerWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={require('./icons/close-icon.png')}
            alt="Instagram Icon"
          ></img>
        </BurgerWrapper>
      )}
    </StyledNavContainer>
  );
};

export default Navbar;
