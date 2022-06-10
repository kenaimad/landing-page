import styled from 'styled-components';
import { UnorderedList, StyledSubtitle } from '../../../../utils/UniversalStyledElements';

export const IngrediendsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const List = styled(UnorderedList)`
  
`

export const Subtitle = styled(StyledSubtitle)`
  font-size: 1.7rem;

  @media (max-width: 2000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
