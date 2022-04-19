import { useEffect, useState } from 'react';
import { StyledSlider, StyledSliderImage } from './Slider.styled';

const StyledCarousel = () => {
  const [slidesNum, setSlidesNum] = useState(5);

  const handleWidthChange = () => {
    console.log("zmieniam");
    if (document.documentElement.clientWidth < 1080) {
      setSlidesNum(1);
    } else {
      setSlidesNum(5);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidthChange);
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNum,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      <a
        href="https://www.instagram.com/p/CbVANtxsTvr/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/1.jpeg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/CUW6-pKs9Hl/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/4.jpeg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/CZY2BsNsp1k/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/2.jpg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/CO9tF3Mrp4n/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/3.jpeg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/Ca9kc3DMoFV/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/5.jpeg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/CNjvaIdHCOR/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/6.jpeg')}
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/p/CPU_G6YreSV/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledSliderImage
          src={require('../../pages/HomePage/images/pictures/7.jpeg')}
          alt=""
        />
      </a>
    </StyledSlider>
  );
};

export default StyledCarousel;
