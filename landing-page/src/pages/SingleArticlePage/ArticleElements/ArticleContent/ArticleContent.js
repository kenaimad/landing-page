import { Paragraph, StyledContent, TextContainer, Title } from './ArticleContent.styled';

const ArticleContent = (props) => {
  const writeParagraphs = () => {
    if (props.content !== '') {
      let paragraphsArray = [];

      props.content.forEach((element) => {
        let subtitle = element.split('*')[0];
        let paragraph = element.split('*')[1];

        paragraph = paragraph.replaceAll(' w ',' w\u00a0');
        paragraph = paragraph.replaceAll(' W ',' W\u00a0');
        paragraph = paragraph.replaceAll(' i ',' i\u00a0');

        //console.log(paragraph);

        paragraphsArray.push({ subtitle, paragraph });
      });


      return (
        <>
          {paragraphsArray.map((paragraph) => (
            <TextContainer key={paragraph.subtitle}>
              <Title><u>{paragraph.subtitle}</u></Title>
              <Paragraph>{paragraph.paragraph}</Paragraph>
            </TextContainer>
          ))}
        </>
      );
    }
    return null;
  };

  return <StyledContent>{writeParagraphs()}</StyledContent>;
};

export default ArticleContent;
