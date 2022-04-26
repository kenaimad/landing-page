import styled from 'styled-components';

export const StyledRecipePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 50%;
  height: 90vh;
  background-color: white;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  font-weight: bold;

  h1 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-weight: bold;
  }

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledImgContainer = styled.div`
  text-align: center;
  width: 60%;
  max-height: 50vh;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
