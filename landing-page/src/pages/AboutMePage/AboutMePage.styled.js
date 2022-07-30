import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledTitle,
  StyledParagraph,
  StyledImg,
  StyledSubtitle,
  StyledA,
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
  font-size: 1.4rem;
  padding: 0.5rem;

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


export const Anchor = styled(StyledA)`
    &:hover {
      color: #db814f;
    }
`
