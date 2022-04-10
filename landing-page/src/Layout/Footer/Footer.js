import {
  StyledContactInfo,
  StyledContainer,
  StyledFooter,
  StyledLogo,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLogo>
          <img src={require('./images/logo-icon.png')} alt="Logo" />
        </StyledLogo>
        <StyledContactInfo>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/dobrzeje.m/?fbclid=IwAR18n-bY48KQVcn52aWjXrA1qhNYjf_2KBdEBYwL42NVLZVaARNlVwblLjs"
          >
            <div>
              <img src={require('./images/ig-icon.png')} alt="Instagram icon" />
              <p>dobrzeje.m</p>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:martynaosien@gmail.com"
          >
            <div>
              <img src={require('./images/mail-icon.png')} alt="Email icon" />
              <p>dobrzejem.dietetyk@gmail.com</p>
            </div>
          </a>
        </StyledContactInfo>
      </StyledContainer>
    </StyledFooter>
  );
};
export default Footer;
