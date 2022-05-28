import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  max-width: 90%;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const MainSectionStyled = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  //max-height: 100%;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PhotoWrapper = styled.div`
  width: 60%;
  margin: 1rem;
  //max-width: 800px;
  //max-height: 40vh;
  padding: 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 1600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1080px) {
    font-size: 1.6rem;
  }
`;

export const PhotoDescriptionContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //min-width: 360px;

  h2 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;

    @media (max-width: 1600px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1300px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1080px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;

    @media (max-width: 1600px) {
      font-size: 1.3rem;
    }

    @media (max-width: 1300px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1080px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1080px) {
    padding-top: 5vh;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    order: 2;
  }

  @media (max-height: 1080px) {
    padding-top: 5vh;
  }

  @media (max-height: 505px) {
    //padding-top: 10vh;
  }
`;

export const StyledPhoto = styled.img`
  max-width: 100%;
  max-height: 100%;
  //border: 1px solid #c4ab9d;
`;

export const GallerySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 200px;
  max-width: 90%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;
