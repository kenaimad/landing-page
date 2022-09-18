import styled from 'styled-components';
import { Colors } from '../../../../../utils/Colors';

export const TileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 40%;
  max-height: 70vh;

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 1.5rem;
    border: 1px solid ${Colors.primaryFontColor};
  }

`;

export const FrontTileImg = styled.img`
  position: relative;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;

  z-index: 1;

  &:hover {
    z-index: 0;
  }
`;

export const BackTileImg = styled.img`
  position: absolute;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;

  z-index: 0;

  &:hover {
    z-index: 1;
  }

  @media (max-width: 640px) {
    z-index: 1;
  }
`;
