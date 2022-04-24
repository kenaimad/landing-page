import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c4ab9d;
  margin: 1rem;
  min-width: 200px;
`;

export const StyledRecipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;



  h2 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
  }

  ul {
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-weight: bold;
  }
`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 100px;
  height: 100px;
  img {
    max-width: 100%;
    max-height: 100%;
    //max-height: 100%;
    //border: 1px solid #c4ab9d;
  }
`;
