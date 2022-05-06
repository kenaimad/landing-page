import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  min-width: 200px;
  max-width: 20%;
  margin: 1rem;
`;

export const StyledRecipe = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


`;

export const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 100%;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
    //max-height: 100%;
    //border: 1px solid #c4ab9d;
  }
`;
