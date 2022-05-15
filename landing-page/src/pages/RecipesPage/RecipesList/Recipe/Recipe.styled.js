import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: flex;
  width: 24%;
  margin: 2rem;
  transition: all 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
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
