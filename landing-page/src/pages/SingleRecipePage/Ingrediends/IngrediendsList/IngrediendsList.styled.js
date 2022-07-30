import styled from 'styled-components';
import { UnorderedList, StyledSubtitle } from '../../../../utils/UniversalStyledElements';

export const IngrediendsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%; 
  font-size: 1.3rem;


  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    text-align: left;


  }
`;

export const List = styled(UnorderedList)`
  list-style-position: inside;
`

export const Subtitle = styled(StyledSubtitle)`
  

`;
