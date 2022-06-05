import styled from 'styled-components';

export const IngrediendsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;

  h2 {
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
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
  }
`;
