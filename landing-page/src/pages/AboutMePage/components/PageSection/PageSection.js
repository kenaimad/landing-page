import * as S from './PageSection.styled';

const Paragraph1 = (props) => {
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

export default Paragraph1;
