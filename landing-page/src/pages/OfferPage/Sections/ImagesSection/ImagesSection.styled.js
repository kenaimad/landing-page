import styled from 'styled-components';

export const ImagesSection = styled.section`
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 600px) {
      flex-wrap: wrap;
    }

  img {
    object-fit: contain;
    width: 25%;
    //min-width: 100px;
    flex-grow: 0;
    padding-left: 1rem;
    padding-top: 0.5rem;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 600px) {
      width: 50%;
    }
  }
`;
