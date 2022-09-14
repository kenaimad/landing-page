import * as S from './TilesSection.styled';
import Tile from './Tile/Tile';

const TilesSection = () => {
    const tilesImages = [
        {
            frontImage: require('./offerImages/1st1.png'),
            backImage: require('./offerImages/1st2.png')
        },
        {
            frontImage: require('./offerImages/2nd1.png'),
            backImage: require('./offerImages/2nd2.png')
        },
        {
            frontImage: require('./offerImages/3rd1.png'),
            backImage: require('./offerImages/3rd2.png')
        },
        {
            frontImage: require('./offerImages/4th1.png'),
            backImage: require('./offerImages/4th2.png')
        },
        {
            frontImage: require('./offerImages/7th1.png'),
            backImage: require('./offerImages/7th2.png')
        },
        {
            frontImage: require('./offerImages/8th1.png'),
            backImage: require('./offerImages/8th2.png')
        },
        {
            frontImage: require('./offerImages/5th1.png'),
            backImage: require('./offerImages/5th2.png')
        },
        {
            frontImage: require('./offerImages/6th1.png'),
            backImage: require('./offerImages/6th2.png')
        },
    ];

    return <S.StyledTilesSection>
        {tilesImages.map((tile) => {
            return <Tile key={tile.frontImage} tile={tile} />;
        })}
    </S.StyledTilesSection>
}

export default TilesSection;