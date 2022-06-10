import { BibliographSection, List } from './ArticleBibliography.styled';

const ArticleBibliography = (props) => {
  const writeBibliography = () => {
    if (props.content !== '') {
      return (
        <>
          {props.bibliography.map((bibliography) => (
            <li key={bibliography}>{bibliography}</li>
          ))}
        </>
      );
    }
    return null;
  };
  return (
    <BibliographSection>
      <List>{writeBibliography()}</List>
    </BibliographSection>
  );
};

export default ArticleBibliography;
