import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  //max-height: 100%;
  max-height: 100%;
  width: 100%;
  margin-bottom: 2rem;

  .slick-slider {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    height: 100%;
    margin: 0 -5px;

    .slick-track {
      height: 100%;
    }
  }

  .slick-slide > div {
    padding: 0 5px;
  }

  .slick-prev:before {
    content: '<';
    color: #c4ab9d;
    font-size: 30px;
    font-weight: bolder;
    top: 40%;
  }

  div .slick-active {
  }

  .slick-next {
    right: -25px;
    //margin: 15px;
  }

  .slick-next:before {
    content: '>';
    color: #c4ab9d;
    font-size: 30px;
    font-weight: bolder;
  }
`;

export const StyledSliderImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  //height: 300px;
  object-fit: scale-down;
`;
