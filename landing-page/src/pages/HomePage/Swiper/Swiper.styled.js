import styled from 'styled-components';

export const StyledInstagramSwiper = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  .swiper-button-prev, .swiper-button-next {
      color: #c4ab9d;
      height: 100%;
      display: flex;
      top: 10%;
    }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 100%;
      max-width: 33%;

      a {
        display: inline-block;
        max-height: 100%;

        img {
          display: block;
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
`;
