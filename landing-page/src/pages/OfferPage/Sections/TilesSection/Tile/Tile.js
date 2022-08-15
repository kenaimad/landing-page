import * as S from './Tile.styled';

const Tile = (props) => {
  return (
    <S.TileContainer>
      <S.FrontTileImg src={props.tile.frontImage} />
      <S.BackTileImg src={props.tile.backImage} />
    </S.TileContainer>
  );
};

export default Tile;
