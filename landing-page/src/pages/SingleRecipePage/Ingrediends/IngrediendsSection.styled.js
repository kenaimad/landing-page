import styled from 'styled-components';

export const Ingrediends = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  //font-size: 1.8rem;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }

`;
