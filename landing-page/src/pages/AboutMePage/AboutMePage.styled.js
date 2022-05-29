import styled from 'styled-components';

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: white;

  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  //height: 50%;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  display: none;

  @media (max-width: 1080px) {
    margin-top: 2rem;
    display: block;
  }
`;

export const TextContainer = styled.div`
  width: 70%;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;

    @media (max-width: 1080px) {
      display: none;
    }
  }

  p {
    padding: 0.5rem;
    font-size: 1.3rem;

    @media (max-width: 2100px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1900px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1600px) {
      font-size: 1rem;
    }

    @media (max-width: 1300px) {
      font-size: .8rem;
    }

    @media (max-width: 1200px) {
      font-size: 1.3rem;
    }

    @media (max-width: 700px) {
      font-size: 1.1rem;
    }

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    order: 2;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    order: 1;
  }
`;

export const StyledImg = styled.img`
  width: 70%;

  @media (max-width: 640px) {
  }
`;
