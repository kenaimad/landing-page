import { StyledImgContainer, StyledArticle, NavLink } from './Article.styled';

const Article = (props) => {
  return (
    <NavLink to={`/knowledge/articles/${props.id}`}>
      <StyledArticle>
        <StyledImgContainer>
          <img src={props.photo} alt="Article"></img>
        </StyledImgContainer>
        <h2>{props.title}</h2>
      </StyledArticle>
    </NavLink>
  );
};

export default Article;
