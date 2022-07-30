import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  width: 90%;
  padding: 1rem;

  ul {
    margin-left: 2rem;
  }

  
  @media (max-width: 1080px) {
    width: 100%;
    //flex-direction: column;
  }
`;

export const Title = styled(StyledTitle)`

`;

export const Subtitle = styled(StyledSubtitle)`

`;

export const Paragraph = styled(StyledParagraph)`
  font-size: 1.5rem;
  text-align: left;


`;

export const StyledRecipePage = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const PreparationContainer = styled.div`
  //max-height: 500px;
  font-size: 1.5rem;


`;

export const StyledImgContainer = styled.div`
  text-align: center;
  max-height: 500px;
  margin: 1rem;

  @media (max-width: 800px) {
      max-height: 300px;
    }

  img {
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }
`;
