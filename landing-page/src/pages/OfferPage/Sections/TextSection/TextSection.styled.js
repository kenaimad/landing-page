import styled from 'styled-components';
import { StyledSubtitle } from '../../../../utils/UniversalStyledElements';

export const InformationContainer = styled.section``;

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

export const SubTitle = styled(StyledSubtitle)`
  text-decoration: underline 1px solid #c4ab9d;
  font-size: 2rem;
`;

export const ImagesContainer = styled.section`
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;


  img {
    height: 40vh;
    max-height: 400px;
    object-fit: contain;
    min-width: 100px;
    flex-grow: 0;
    padding-left: 1rem;
    padding-top: 0.5rem;
    transition: all 0.3s ease-in;
    border: 1px solid #c4ab9d;
    margin: 1rem;

    @media (max-width: 950px) {
      width: 80%;
      height: fit-content;
    }
  }
`;
