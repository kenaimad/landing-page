import styled from 'styled-components';

export const Ingrediends = styled.section`
  display: flex;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }

  li {
    font-size: 1.5rem;

    @media (max-width: 2000px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1600px) {
      font-size: 1.3rem;
    }

    @media (max-width: 1200px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    @media (max-width: 800px) {
      font-size: 1.3rem;
    }
  }
`;
