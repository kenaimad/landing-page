import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  max-height: 100%;
  width: 100%;
  margin-bottom: 2rem;

  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    margin: 0 -5px;
    height: 100%;
    width: 100%;
  }
  .slick-slide > div {
    padding: 0 5px;

  }

  .slick-prev:before {
    content: '<';
    color: #c4ab9d;
    font-size: 30px;
    font-weight: bolder;
  }

  div .slick-active {
    max-height: 200px;

  }
  .slick-next {
    right: -15px;
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
  object-fit:scale-down;
`;
