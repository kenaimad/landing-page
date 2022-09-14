import styled from 'styled-components';

export const StyledInstagramSwiper = styled.div`
  //flex-direction: column;
  height: 100%;
  width: 90%;
  text-align: center;

  .swiper-button-prev,
  .swiper-button-next {
    color: #4f2d11;
    height: 100%;
    font-size: 10rem;
    display: flex;
    top: 10%;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    .swiper-slide {
      max-height: 50%;
      width: 25%;
      margin-bottom: 20px;

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
        max-width: 100%;

        img {
          display: block;
          height: auto;
          width: auto;
          max-width: 100%;
          max-height: 100%;

          @media (max-width: 600px) {
            max-width: 75%;
            max-height: 75%;
            //border: 1px solid #c4ab9d;
          }

          /* @media (max-width: 2300px) {
            max-width: 100%;
            max-height: 100%;
            border: 1px solid #c4ab9d;
          } */

          @media (min-width: 600px) {
            max-width: 90%;
            max-height: 400px;
            border: 1px solid #c4ab9d;
          }
        }
      }
    }
  }
`;
