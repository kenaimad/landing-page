import * as S from './ImagesSection.styled';

const ImagesSection = () => {
  const images = [
    {
      src: require('../../images/diseases/1.png'),
      alt: 'Skuteczne odchudzanie.',
    },
    {
      src: require('../../images/diseases/2.png'),
      alt: 'Skuteczne odchudzanie.',
    },
    {
      src: require('../../images/diseases/3.png'),
      alt: 'Skuteczne odchudzanie.',
    },
    {
      src: require('../../images/diseases/4.png'),
      alt: 'Skuteczne odchudzanie.',
    },
    {
      src: require('../../images/diseases/5.png'),
      alt: 'Skuteczne odchudzanie.',
    },
  ];

  return (
    <S.ImagesSection>
      {images.map((image) => {
        return <img src={image.src} alt={image.alt} />;
      })}
    </S.ImagesSection>
  );
};

export default ImagesSection;
