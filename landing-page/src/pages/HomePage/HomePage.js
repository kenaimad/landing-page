import {
  GalleryWrapper,
  PhotoWrapper,
  StyledHomePageContainer,
  StyledPhoto,
  StyledSlider,
} from './HomePage.styled';

const HomePage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledHomePageContainer>
      <PhotoWrapper>
        <StyledPhoto src={require('./images/img1.png')} alt="Photo" />
      </PhotoWrapper>
      <GalleryWrapper>
        <StyledSlider {...settings}>
          <div>
            <StyledPhoto
              src={require('./images/pictures/7.jpeg')}
              alt="Photo"
            />
          </div>
          <div>
            <StyledPhoto
              src={require('./images/pictures/1.jpeg')}
              alt="Photo"
            />
          </div>
          <div>
            <StyledPhoto src={require('./images/pictures/2.jpg')} alt="Photo" />
          </div>
          <div>
            <StyledPhoto
              src={require('./images/pictures/3.jpeg')}
              alt="Photo"
            />
          </div>
          <div>
            <StyledPhoto
              src={require('./images/pictures/4.jpeg')}
              alt="Photo"
            />
          </div>
          <div>
            <StyledPhoto
              src={require('./images/pictures/5.jpeg')}
              alt="Photo"
            />
          </div>
          <div>
            <StyledPhoto
              src={require('./images/pictures/6.jpeg')}
              alt="Photo"
            />
          </div>
        </StyledSlider>
      </GalleryWrapper>
    </StyledHomePageContainer>
  );
};

export default HomePage;
