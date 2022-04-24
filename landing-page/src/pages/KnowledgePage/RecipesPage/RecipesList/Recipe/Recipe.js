import { useEffect } from 'react';
import { StyledImgContainer, StyledRecipe } from './Recipe.styled';

const Recipe = (props) => {


  return (
    <StyledRecipe>
      <StyledImgContainer>
        <img src={props.photo} alt="Recipe"></img>
      </StyledImgContainer>
      <h2>{props.name}</h2>
      <p>Składniki:</p>
      <p>{props.ingrediends[0]}</p>
      <p>{props.ingrediends[1]}</p>
      <p>{props.ingrediends[2]}</p>
    </StyledRecipe>
  );
};

export default Recipe;
