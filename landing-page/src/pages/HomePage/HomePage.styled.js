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
  max-height: 70%;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const PhotoWrapper = styled.div`
  width: 60%;
  margin: 1rem;
  max-width: 800px;
  //max-height: 40vh;
  padding: 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
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
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
  }

  @media (max-width: 1080px) {
    padding-top: 15vh;
    padding-left: .5rem;
    padding-right: .5rem;
    width: 100%;
  }

  @media (max-height: 810px) {
    padding-top: 20vh;
  }

  @media (max-height: 500px) {
    padding-top: 25vh;
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
  max-width: 80%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;
