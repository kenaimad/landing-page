import {
  StyledNavContainer,
  StyledListContainer,
  StyledListElement as Element,
  NavLink,
  StyledP,
  IconWrapper,
  StyledIcon,
} from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavContainer>
      <StyledListContainer>
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
    </StyledNavContainer>
  );
};

export default Navbar;

{
  /* <Element>
<NavLink to="shop"><StyledP>Sklep</StyledP></NavLink>
</Element> */
}
