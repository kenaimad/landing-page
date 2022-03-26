import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  //margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  background-color: white;
  //height: 100vh;
  //background-image: url('https://i.ibb.co/vxKxfKf/tlo.png');

  img {
  }
`;

export const PhotoWrapper = styled.div`
  margin: 1rem;
  //align-self: center;
  max-height: 40vh;
  max-width: 50%;
  border: 1px solid #c4ab9d;
  padding: 1rem;
`;

export const StyledPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const GalleryWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 500px;
  margin: 1rem;
`;

export const StyledSlider = styled(Slider)`
  border: 1px solid #c4ab9d;
  height: 70%;
  width: 70%;
  max-height: 80%;
  max-width: 80%;

  button {
    .slick-next:before {
        content: url("https://i.ibb.co/TbrV967/right-Arrow.png");
        background-color: red;
    }
  }
`;
