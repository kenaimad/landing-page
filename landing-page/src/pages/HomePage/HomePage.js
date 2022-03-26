import StyledCarousel from '../../Layout/Slider/Slider';
import {
  GallerySection,
  PhotoWrapper,
  StyledHomePageContainer,
  StyledPhoto,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledHomePageContainer>
      <PhotoWrapper>
        <StyledPhoto src={require('./images/img1.png')} alt="Photo" />
      </PhotoWrapper>
      <GallerySection>
        <StyledCarousel />
      </GallerySection>
    </StyledHomePageContainer>
  );
};

export default HomePage;
