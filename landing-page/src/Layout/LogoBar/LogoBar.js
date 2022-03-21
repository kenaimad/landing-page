import {
  StyledContainer,
  StyledLogo,
  LogoWrapper,
  NavLink,
} from './LogoBar.styled';

const LogoBar = () => {
  return (
    <StyledContainer>
      <LogoWrapper>
        <NavLink to="/">
          <StyledLogo src={require('./logo2.png')} alt="Logo" />
        </NavLink>
      </LogoWrapper>
    </StyledContainer>
  );
};

export default LogoBar;
