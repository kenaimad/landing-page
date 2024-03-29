import styled from 'styled-components';
import { StyledSubtitle } from '../../../../utils/UniversalStyledElements';
import { Colors } from '../../../../utils/Colors';

export const InformationContainer = styled.section``;

export const InformativeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-family: 'Poppins', sans-serif;
  color: ${Colors.primaryFontColor};
  font-weight: bold;
  text-align: center;
  min-width: 300px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    text-align: center;
    margin: 1rem 1rem;
    font-size: 1.5rem;

    p {
      color: ${Colors.primaryFontColor};
    }

    @media (max-width: 640px) {
      width: 100%;
      padding: 1rem;
    }
  }
`;

export const SubTitle = styled(StyledSubtitle)`
  text-decoration: underline 1px solid ${Colors.primaryFontColor};
  font-size: 2rem;
  color:  ${Colors.primaryFontColor};
`;

export const ImagesContainer = styled.section`
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;

  //align-items: center;
  flex-wrap: wrap;

  img {
    height: 40vh;
    max-height: 400px;
    max-width: 400px;
    object-fit: contain;
    flex-grow: 0;
    transition: all 0.3s ease-in;
    border: 1px solid ${Colors.primaryFontColor};;
    margin: 1rem;

    @media (max-width: 950px) {
      width: 80%;
      height: fit-content;
    }
  }
`;
