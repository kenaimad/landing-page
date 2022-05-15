import { useEffect, useState } from 'react';
//import API from '../../../../api/api';
import Recipe from './Recipe/Recipe';
import { StyledRecipeList } from './RecipesList.styled';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://landing-page-3dc5c-default-rtdb.firebaseio.com/recipes.json`
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const responseData = await response.json();
    //console.log(responseData);

    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        mainPhoto: responseData[key].mainPhoto,
      });
      
    }


    setRecipes(loadedMeals);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <StyledRecipeList>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            mainPhoto = {recipe.mainPhoto}
          />
        ))}
    </StyledRecipeList>
  );
};

export default RecipeList;
