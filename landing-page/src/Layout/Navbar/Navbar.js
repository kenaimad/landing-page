import {
  StyledNavContainer,
  StyledListContainer,
  StyledListElement as Element,
  NavLink,
} from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavContainer>
      <StyledListContainer>
        <Element>
          <NavLink to="/">Strona główna</NavLink>
        </Element>
        <Element>
          <NavLink to="about">O mnie</NavLink>
        </Element>
        <Element>
          <NavLink to="knowledge">Baza wiedzy</NavLink>
        </Element>
        <Element>
          <NavLink to="offer">Oferta</NavLink>
        </Element>
        <Element>
          <NavLink to="shop">Sklep</NavLink>
        </Element>
        <Element>
          <NavLink to="contact">Kontakt</NavLink>
        </Element>
      </StyledListContainer>
    </StyledNavContainer>
  );
};

export default Navbar;
