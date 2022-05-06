import { StyledImgContainer, StyledRecipe, NavLink } from './Recipe.styled';

const Recipe = (props) => {
  return (
    <NavLink to={`/knowledge/recipes/${props.id}`}>
      <StyledRecipe>
        <StyledImgContainer>
          <img src={props.mainPhoto} alt="Recipe"></img>
        </StyledImgContainer>
      </StyledRecipe>
    </NavLink>
  );
};

export default Recipe;
