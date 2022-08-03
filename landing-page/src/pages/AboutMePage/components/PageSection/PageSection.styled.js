import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  &:nth-child(3) {
    flex-direction: row-reverse;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
    color: #c4ab9d;

    
  @media (max-width: 1200px) {
    display: none;
  }
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 70%;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    order: 2;
  }

  p {
    font-weight: bold;
    text-align: center;
    font-size: 1.4rem;
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    //height: 50%;
    order: 1;
  }

  img {
    width: 70%;
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1200px) {
      width: 60%;
      //height: 50%;
      order: 1;
    }
  }
`;
