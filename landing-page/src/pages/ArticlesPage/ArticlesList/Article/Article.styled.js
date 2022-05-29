import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

export const StyledArticle = styled.div`
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
  width: 50%;
  transition: all 0.3s ease-in;

  img {
    max-width: 100%;
    max-height: 100%;
    //max-height: 100%;
    //border: 1px solid #c4ab9d;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
