import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const StyledSlider = styled(Slider)`
  //max-height: 100%;
  max-height: 100%;
  width: 100%;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    //display: none;
    width: 50%;
  }

  .slick-slider {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .slick-list {

    margin: 0 -5px;

    .slick-track {

    }
  }

  .slick-slide {

  }

  .slick-slide > div {
    padding: 0 5px;
    height: 30vh;
    //height: 300px;
  }

  .slick-prev:before {
    content: '<';
    color: #c4ab9d;
    font-size: 30px;
    font-weight: bolder;
    top: 40%;
  }

  div .slick-active {
    //max-height: 100%;
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
  max-width: 100%;
  height: 30vh;
  object-fit: scale-down;
`;
