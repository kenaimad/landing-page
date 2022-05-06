import { StyledImgContainer, StyledRecipePage } from './RecipePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState({
    Photo: '',
    Ingrediends: [],
    Name: '',
    Preparation: '',
  });

  let { id } = useParams();
  
  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://landing-page-3dc5c-default-rtdb.firebaseio.com/recipes/${id}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      setRecipeObj(responseData);
      //console.log(recipeObj.Ingrediends);
    };
    getRecipe();
  }, [id]);

  

  return (
    <StyledRecipePage>
      <h1>{recipeObj.name}</h1>
      <StyledImgContainer>
        <img alt="Meal" src={recipeObj.photo} />
      </StyledImgContainer>
      {/* <h3>Składniki:</h3>
      <ul>
        {recipeObj.Ingrediends.map((ingrediend) => (
          <li key={ingrediend}>{ingrediend}</li>
        ))}
      </ul> */}
      <h3>Sposób przygotowania:</h3>
      <p>{recipeObj.preparation}</p>
    </StyledRecipePage>
  );
};

export default RecipePage;
