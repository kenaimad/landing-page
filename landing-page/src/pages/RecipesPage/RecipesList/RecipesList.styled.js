import styled from 'styled-components';
import { ComponentWrapper } from '../../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;
