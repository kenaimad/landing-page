import styled from 'styled-components';
import {
  StyledSubtitle,
  StyledParagraph,
  ComponentWrapper,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  justify-content: flex-start;
`

export const MainSectionStyled = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  //max-height: 100%;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const GallerySection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 200px;
  max-width: 90%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const PhotoWrapper = styled.div`
  width: 50%;
  margin-left: 1rem;
  //max-width: 800px;
  //max-height: 40vh;
  padding-bottom: 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const MobileTitle = styled(StyledSubtitle)`
  display: none;

  @media (max-width: 1080px) {
    margin-top: 2rem;
    display: block;
  }
`;

export const DesktopTitle = styled(StyledSubtitle)`
  font-size: 2rem;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Paragraph = styled(StyledParagraph)`
  font-size: 1.5rem;
`;

export const PhotoDescriptionContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    //padding-top: 5vh;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    order: 2;
  }
`;
