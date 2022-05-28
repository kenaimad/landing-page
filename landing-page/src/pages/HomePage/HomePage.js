import StyledCarousel from '../../Layout/Slider/Slider';
import {
  GallerySection,
  PhotoWrapper,
  StyledHomePageContainer,
  StyledPhoto,
  MainSectionStyled,
  PhotoDescriptionContainer,
  Title,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <MainSectionStyled>
        <Title>Cześć!</Title>
        <PhotoDescriptionContainer>
          <h2>Cześć!</h2>
          <p>
            Mam na imię Martyna, z wykształcenia jestem dietetykiem klinicznym.
            Jeśli jesteś na mojej stronie to najprawdopodobniej kochasz swój
            organizm i chcesz zadbać o niego w jak najlepszy sposób. Z
            przyjemnością pomogę Ci w odnalezieniu sposobu żywienia, który
            będzie smakował i odżywiał, bez zbędnych restrykcji i wykluczeń.
          </p>
          <p>
            Chodź, pokażę Ci jak <u>jeść dobrze!</u>
          </p>
        </PhotoDescriptionContainer>
        <PhotoWrapper>
          <StyledPhoto src={require('./images/img1.png')} alt="Photo" />
        </PhotoWrapper>
      </MainSectionStyled>
      <GallerySection>
        <StyledCarousel />
      </GallerySection>
    </StyledHomePageContainer>
  );
};

export default HomePage;
