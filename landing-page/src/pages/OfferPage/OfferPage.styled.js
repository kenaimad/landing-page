import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
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
    width: 50vw;
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

export const ConsultationSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;

  div {
    position: relative;
    //z-index: -1;
  }
`;

export const FrontTileImg = styled.img`
  position: relative;
  object-fit: contain;
  height: 400px;
  width: 400px;
  top: 0;
  left: 0;
  //transition: all 0.7s ease-in-out;
  z-index: 1;

  &:hover {
    z-index: 0;
  }
`;

export const BackTileImg = styled.img`
  position: absolute;
  object-fit: contain;
  height: 400px;
  width: 400px;
  top: 0px;
  left: 0px;
  z-index: 0;


  &:hover {
    z-index: 1;
  }

`;
