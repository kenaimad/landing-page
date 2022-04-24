import { StyledImgContainer, StyledRecipe, NavLink } from './Recipe.styled';

const Recipe = (props) => {
  return (
    <NavLink to={`/knowledge/recipes/${props.id}`}>
      <StyledRecipe>
        <StyledImgContainer>
          <img src={props.photo} alt="Recipe"></img>
        </StyledImgContainer>
        <h2>{props.name}</h2>
        <h3>Składniki:</h3>
        <ul>
          {props.ingrediends.map((ingrediend) => (
            <li key={ingrediend}>{ingrediend}</li>
          ))}
        </ul>
      </StyledRecipe>
    </NavLink>
  );
};

export default Recipe;
