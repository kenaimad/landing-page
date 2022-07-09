import styled from 'styled-components';
import { ComponentWrapper } from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  align-items: center;
  align-content: center;
  width: 80%;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

