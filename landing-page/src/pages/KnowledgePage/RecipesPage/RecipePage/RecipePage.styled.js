import styled from 'styled-components';

export const StyledRecipePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 60%;
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

  h2 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-weight: bold;
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-weight: bold;
  }

  ul {
    margin-left: 2rem;
  }

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledImgContainer = styled.div`
  text-align: center;
  max-height: 40vh;
  margin: 1rem;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
