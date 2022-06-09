import StyledCarousel from '../../Layout/Slider/Slider';
import { StyledImg, StyledParagraph } from '../../utils/UniversalStyledElements';
import {
  GallerySection,
  PhotoWrapper,
  StyledHomePageContainer,
  MainSectionStyled,
  PhotoDescriptionContainer,
  MobileTitle,
  DesktopTitle,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <MainSectionStyled>
        <MobileTitle fontSize="2">Cześć!</MobileTitle>
        <PhotoDescriptionContainer>
          <DesktopTitle fontSize="2">Cześć!</DesktopTitle>
          <StyledParagraph fontSize="1.5">
            Mam na imię Martyna, z wykształcenia jestem dietetykiem klinicznym.
            Jeśli jesteś na mojej stronie to najprawdopodobniej kochasz swój
            organizm i chcesz zadbać o niego w jak najlepszy sposób. Z
            przyjemnością pomogę Ci w odnalezieniu sposobu żywienia, który
            będzie smakował i odżywiał, bez zbędnych restrykcji i wykluczeń.
          </StyledParagraph>
          <StyledParagraph fontSize="1.5">
            Chodź, pokażę Ci jak <u>jeść dobrze!</u>
          </StyledParagraph>
        </PhotoDescriptionContainer>
        <PhotoWrapper>
          <StyledImg src={require('./images/img1.png')} alt="Photo" />
        </PhotoWrapper>
      </MainSectionStyled>
      <GallerySection>
        <StyledCarousel />
      </GallerySection>
    </StyledHomePageContainer>
  );
};

export default HomePage;
