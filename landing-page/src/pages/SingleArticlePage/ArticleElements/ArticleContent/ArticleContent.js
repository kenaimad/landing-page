import { StyledContent, StyledParagraph } from './ArticleContent.styled';

const ArticleContent = (props) => {
  const writeIngrediends = () => {
    if (props.content !== '') {
      let paragraphsArray = [];

      props.content.forEach((element) => {
        let subtitle = element.split('*')[0];
        let paragraph = element.split('*')[1];

        paragraphsArray.push({ subtitle, paragraph });
      });


      return (
        <>
          {paragraphsArray.map((paragraph) => (
            <StyledParagraph key={paragraph.subtitle}>
              <h1><u>{paragraph.subtitle}</u></h1>
              <div>{paragraph.paragraph}</div>
            </StyledParagraph>
          ))}
        </>
      );
    }
    return null;
  };

  return <StyledContent>{writeIngrediends()}</StyledContent>;
};

export default ArticleContent;
