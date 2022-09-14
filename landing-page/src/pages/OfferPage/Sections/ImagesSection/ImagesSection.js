import * as S from './ImagesSection.styled';

const ImagesSection = () => {
  const images = [
    {
      src: require('../../images/diseases/1.png'),
      alt: 'Skuteczne odchudzanie.',
    },
    {
      src: require('../../images/diseases/6.png'),
      alt: 'Wsparcie w chorobie.',
    },
    {
      src: require('../../images/diseases/2.png'),
      alt: 'Diety roślinne..',
    },
    {
      src: require('../../images/diseases/5.png'),
      alt: 'Zmiana nawyków.',
    },
  ];

  return (
    <S.ImagesSection>
      {images.map((image) => {
        return <img key={image.src} src={image.src} alt={image.alt} />;
      })}
    </S.ImagesSection>
  );
};

export default ImagesSection;
