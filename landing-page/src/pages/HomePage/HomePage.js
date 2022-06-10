import StyledCarousel from '../../Layout/Slider/Slider';
import { StyledImg, ComponentWrapper } from '../../utils/UniversalStyledElements';
import {
  GallerySection,
  PhotoWrapper,
  MainSectionStyled,
  PhotoDescriptionContainer,
  MobileTitle,
  DesktopTitle,
  Paragraph,
  PageWrapper,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <PageWrapper>
      <MainSectionStyled>
        <MobileTitle fontSize="2.5">Cześć!</MobileTitle>
        <PhotoDescriptionContainer>
          <DesktopTitle fontSize="2">Cześć!</DesktopTitle>
          <Paragraph fontSize="1.5">
            Mam na imię Martyna, z wykształcenia jestem dietetykiem klinicznym.
            Jeśli jesteś na mojej stronie to najprawdopodobniej kochasz swój
            organizm i chcesz zadbać o niego w jak najlepszy sposób. Z
            przyjemnością pomogę Ci w odnalezieniu sposobu żywienia, który
            będzie smakował i odżywiał, bez zbędnych restrykcji i wykluczeń.
          </Paragraph>
          <Paragraph fontSize="1.5">
            Chodź, pokażę Ci jak <u>jeść dobrze!</u>
          </Paragraph>
        </PhotoDescriptionContainer>
        <PhotoWrapper>
          <StyledImg src={require('./images/img1.png')} alt="Photo" />
        </PhotoWrapper>
      </MainSectionStyled>
      <GallerySection>
        <StyledCarousel />
      </GallerySection>
    </PageWrapper>
  );
};

export default HomePage;
