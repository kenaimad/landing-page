import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  max-height: 100%;
  width: 100%;
  height: fit-content;

  .slick-list {
    margin: 0 -5px;
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

  .slick-next:before {
    content: '>';
    color: #c4ab9d;
    font-size: 30px;
    font-weight: bolder;
  }
`;

export const StyledSliderImage = styled.img`
  width: auto;
`;
