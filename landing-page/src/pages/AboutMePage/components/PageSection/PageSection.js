import * as S from './PageSection.styled';

const PageSection = (props) => {
  return (
    <S.StyledSection>
      <S.TextContainer>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <p>{props.endingText}</p>
      </S.TextContainer>
      <S.ImageContainer className='imageWrapper'>
        <img src={props.img} alt="Martyna" />
      </S.ImageContainer>
    </S.StyledSection>
  );
};

export default PageSection;
