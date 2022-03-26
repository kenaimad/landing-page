import { StyledSlider, StyledSliderImage } from './Slider.styled';

const StyledCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/1.jpeg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/4.jpeg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/2.jpg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/3.jpeg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/5.jpeg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/6.jpeg')}
        alt=""
      />
      <StyledSliderImage
        src={require('../../pages/HomePage/images/pictures/7.jpeg')}
        alt=""
      />
    </StyledSlider>
  );
};

export default StyledCarousel;
