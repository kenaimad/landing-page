import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledSubtitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  padding: 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Subtitle = styled(StyledSubtitle)`

`;

export const StyledImgContainer = styled.div`
  text-align: center;
  width: 100%;
  max-height: 20vh;
  margin: 2rem;
`;
