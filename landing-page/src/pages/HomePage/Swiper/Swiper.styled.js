import styled from 'styled-components';

export const StyledInstagramSwiper = styled.div`
  height: 100%;
  width: 90%;
  text-align: center;

  .swiper-button-prev,
  .swiper-button-next {
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
      border: 1px solid #c4ab9d;
      justify-content: center;
      align-items: center;
      max-height: 100%;
      width: 25%;

      @media (max-width: 1200px) {
        width: 33%;
      }

      @media (max-width: 600px) {
          border: none;
          }

      a {
        display: flex;
        justify-content: center;
        max-height: 100%;

        img {
          display: block;
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;

          @media (max-width: 600px) {
          max-width: 75%;
          max-height: 75%;
          border: 1px solid #c4ab9d;
          }


        }
      }
    }
  }
`;
