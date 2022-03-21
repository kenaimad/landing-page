import {
  StyledNavContainer,
  StyledListContainer,
  StyledListElement as Element,
  NavLink,
  StyledP,
} from './Navbar.styled';

const Navbar = () => {
  return (
    <StyledNavContainer>
      <StyledListContainer>
        <Element>
          <NavLink to="/"><StyledP>Strona główna</StyledP></NavLink>
        </Element>
        <Element>
          <NavLink to="about"><StyledP>O mnie</StyledP></NavLink>
        </Element>
        <Element>
          <NavLink to="knowledge"><StyledP>Baza wiedzy</StyledP></NavLink>
        </Element>
        <Element>
          <NavLink to="offer"><StyledP>Oferta</StyledP></NavLink>
        </Element>
        <Element>
          <NavLink to="shop"><StyledP>Sklep</StyledP></NavLink>
        </Element>
        <Element>
          <NavLink to="contact"><StyledP>Kontakt</StyledP></NavLink>
        </Element>
      </StyledListContainer>
    </StyledNavContainer>
  );
};

export default Navbar;
