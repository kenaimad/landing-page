import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledTitle,
  StyledParagraph,
  StyledImg,
  StyledSubtitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  text-align: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const MobileTitle = styled(StyledTitle)`
  display: none;

  @media (max-width: 1080px) {
    margin-top: 2rem;
    display: block;
  }
`;

export const DesktopTitle = styled(StyledTitle)`
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Subtitle = styled(StyledSubtitle)``;

export const Paragraph = styled(StyledParagraph)`
  font-size: 1.3rem;
  padding: 0.5rem;

  @media (max-width: 2100px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1900px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1600px) {
    font-size: 1rem;
  }

  @media (max-width: 1300px) {
    font-size: 0.8rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 70%;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
    order: 2;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  @media (max-width: 1200px) {
    width: 100%;
    order: 1;
  }
`;

export const Img = styled(StyledImg)`
  width: 70%;
`;
