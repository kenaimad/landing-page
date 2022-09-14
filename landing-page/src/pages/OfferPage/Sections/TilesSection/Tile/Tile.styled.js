import styled from 'styled-components';

export const TileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 40%;
  max-height: 25%;

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 1.5rem;
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
