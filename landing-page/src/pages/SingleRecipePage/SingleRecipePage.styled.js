import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  width: 60%;
  padding: 1rem;

  ul {
    margin-left: 2rem;
  }
`;

export const Title = styled(StyledTitle)`
  @media (max-width: 2000px) {
    font-size: 1.7rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled(StyledSubtitle)`
  @media (max-width: 2000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled(StyledParagraph)`
  font-size: 1.5rem;
  text-align: left;

  @media (max-width: 2000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
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

  @media (max-width: 2000px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const StyledImgContainer = styled.div`
  text-align: center;
  max-height: 500px;
  margin: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 800px) {
      width: 100%;
      max-width: 100%;
    }
  }
`;
