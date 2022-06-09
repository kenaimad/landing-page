import styled from 'styled-components';
import { StyledSubtitle } from '../../utils/UniversalStyledElements';

export const StyledHomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  max-width: 90%;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

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

export const PhotoWrapper = styled.div`
  width: 60%;
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


  @media (min-width: 1080px) {
    margin-top: 2rem;
    display: block;
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

  @media (max-height: 1080px) {
    //padding-top: 5vh;
  }

  @media (max-height: 505px) {
    //padding-top: 10vh;
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
