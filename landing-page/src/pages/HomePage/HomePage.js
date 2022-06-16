import StyledCarousel from '../../Layout/Slider/Slider';
import { StyledImg } from '../../utils/UniversalStyledElements';
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
            Mam na imię Martyna, z&nbsp;wykształcenia jestem dietetykiem
            klinicznym. Jeśli jesteś na mojej stronie to najprawdopodobniej
            kochasz swój organizm i&nbsp;chcesz zadbać o&nbsp;niego w&nbsp;jak
            najlepszy sposób. Z&nbsp;przyjemnością pomogę Ci w&nbsp;odnalezieniu
            sposobu żywienia, który będzie smakował i&nbsp;odżywiał, bez
            zbędnych restrykcji i&nbsp;wykluczeń.
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
