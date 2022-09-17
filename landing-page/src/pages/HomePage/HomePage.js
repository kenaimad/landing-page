//import StyledCarousel from '../../Layout/Slider/Slider';
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
import InstagramSwiper from './Swiper/Swiper';

const HomePage = () => {
  return (
    <PageWrapper>
      <MainSectionStyled>
        <MobileTitle>Cześć!</MobileTitle>
        <PhotoDescriptionContainer>
          <DesktopTitle>Cześć!</DesktopTitle>
          <Paragraph>
            Mam na imię Martyna, jestem dyplomowanym dietetykiem klinicznym. 
            Z&nbsp;przyjemnością pomogę Ci w&nbsp;odnalezieniu sposobu żywienia, który
            będzie smakował, odżywiał i&nbsp;wspierał organizm w zdrowiu i&nbsp;chorobie,
            bez zbędnych restrykcji i&nbsp;wykluczeń.
          </Paragraph>
          <Paragraph>
            Chodź, pokażę Ci jak <u>jeść dobrze!</u>
          </Paragraph>
        </PhotoDescriptionContainer>
        <PhotoWrapper>
          <StyledImg src={require('./images/img1.png')} alt="Photo" />
        </PhotoWrapper>
      </MainSectionStyled>
      <GallerySection>
        <InstagramSwiper />
      </GallerySection>
    </PageWrapper>
  );
};

export default HomePage;
