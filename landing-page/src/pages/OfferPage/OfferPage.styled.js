import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledSubtitle,
  StyledTitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  justify-content: center;
  width: 90%;
  min-width: 330px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled(StyledTitle)`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const SubTitle = styled(StyledSubtitle)`
  text-decoration: underline 1px solid #c4ab9d;
  font-size: 2rem;
`;


export const ImagesSection = styled.section`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  min-width: 300px;
  width: 100%;

  div {
    width: 80%;
    text-align: center;
    margin: 1rem 1rem;
    font-size: 1.5rem;

    @media (max-width: 640px) {
      width: 100%;
      padding: 1rem;
    }

    ol {
      list-style-type: upper-roman;
      list-style-position: inside;
      text-align: center;
    }

  }
`;

export const TileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 35%;
  //max-width: 500px;

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const StyledImage = styled.img`
  object-fit: contain;
  width: 15%;
  min-width: 100px;
  flex-grow: 1;
  padding-left: 1rem;
  padding-top: 0.5rem;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

export const FrontTileImg = styled.img`
  position: relative;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;

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

  z-index: 0;

  &:hover {
    z-index: 1;
  }

  @media (max-width: 640px) {
    z-index: 1;
  }
`;
