import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 420px;
`;

export const StyledTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
`;

export const ImagesSection = styled.section`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const InformativeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  font-weight: bold;
  text-align: center;

  div {
    width: 60vw;

    text-align: center;

    ul {
      text-align: center;
      list-style: none;
    }
  }
`;

export const StyledImage = styled.img`
  object-fit: contain;
  width: 15%;
  min-width: 100px;
  flex-grow: 1;
  margin-right: 1rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }

  div {
    position: relative;
    width: 60vw;
    
    @media (max-width: 640px) {
    width: 100%;
    flex-wrap: wrap;
  }
  }
`;

export const FrontTileImg = styled.img`
  position: relative;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  &:hover {
    z-index: 0;
  }

`;

export const BackTileImg = styled.img`
  position: absolute;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  top: 0px;
  left: 0px;
  z-index: 0;

  &:hover {
    z-index: 1;
  }

  @media (max-width: 640px) {
    z-index: 1;
  }
`;
