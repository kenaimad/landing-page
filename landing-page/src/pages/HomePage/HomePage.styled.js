import styled from 'styled-components';
import {
  StyledSubtitle,
  StyledParagraph,
  ComponentWrapper,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  justify-content: space-between;
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
  @media (max-width: 1600px) {
    font-size: ${(props) => props.fontSize * 1.1}rem;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.fontSize * 0.8}rem;
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSize * 1.5}rem;
    margin-top: 2rem;
    display: none;
  }
`;

export const Paragraph = styled(StyledParagraph)`
  @media (max-width: 1600px) {
    font-size: ${(props) => props.fontSize * 1}rem;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.fontSize * 0.7}rem;
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSize * 1.5}rem;
  }
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
