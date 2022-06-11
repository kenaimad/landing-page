import styled from 'styled-components';
import {
  StyledParagraph,
  StyledSubtitle,
} from '../../../../utils/UniversalStyledElements';

export const StyledContent = styled.div`
  @media (max-width: 1080px) {
  }
`;

export const TextContainer = styled.div`
`;

export const Title = styled(StyledSubtitle)`
  text-align: left;
  font-size: 1.6rem;

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
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Paragraph = styled(StyledParagraph)`
  text-align: left;
  font-size: 1.4rem;
  @media (max-width: 2000px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1200px) {
    font-size: 0.9rem;
  }

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }

  @media (max-width: 600px) {
    font-size: .9rem;
  }
`;


