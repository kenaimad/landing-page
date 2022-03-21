import { StyledContainer, StyledLogo, LogoWrapper } from './LogoBar.styled';

const LogoBar = () => {
  return (
    <StyledContainer>
      <LogoWrapper>
        <StyledLogo src={require('./logo.png')} alt="Logo" />
      </LogoWrapper>
    </StyledContainer>
  );
};

export default LogoBar;
