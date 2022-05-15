import { PreparationContainer, StyledImgContainer, StyledRecipePage } from './RecipePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngrediendsSection from './Ingrediends/IngrediendsSection';

const RecipePage = () => {
  const [recipeObj, setRecipeObj] = useState({
    mainPhoto: '',
    photo: '',
    ingrediends: [],
    name: '',
    preparation: '',
  });

  let { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      let newRecipe;
      const response = await fetch(
        `https://landing-page-3dc5c-default-rtdb.firebaseio.com/recipes/${id}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      newRecipe = responseData;

      setRecipeObj(newRecipe);
    };
    getRecipe();
  }, [id]);

  return (
    <StyledRecipePage>
      <h1>{recipeObj.name}</h1>
      <StyledImgContainer>
        <img alt="Meal" src={recipeObj.photo} />
      </StyledImgContainer>
      <h1>Składniki:</h1>
      <IngrediendsSection ingrediends={recipeObj.ingrediends} />

      <h3>Sposób przygotowania:</h3>
      <PreparationContainer>
        <p>{recipeObj.preparation}</p>
      </PreparationContainer>
    </StyledRecipePage>
  );
};

export default RecipePage;
