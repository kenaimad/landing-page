import styled from 'styled-components';
import {
  ComponentWrapper,
  StyledTitle,
} from '../../utils/UniversalStyledElements';

export const PageWrapper = styled(ComponentWrapper)`
  justify-content: center;
  width: 90%;
  min-width: 330px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const Title = styled(StyledTitle)`
  margin-top: 1rem;
  font-size: 2rem;
`;
