import styled from 'styled-components';

export const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #c4ab9d;
  margin: 1rem;
  min-width: 200px;

  h2 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: .8rem;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 100px;
  max-height: 100px;
  img {
    max-width: 100%;
    max-height: 100%;
    //max-height: 100%;
    //border: 1px solid #c4ab9d;
  }
`;

