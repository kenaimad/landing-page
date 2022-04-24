import { useEffect, useState } from 'react';
//import API from '../../../../api/api';
import Recipe from './Recipe/Recipe';
import { StyledRecipeList } from './RecipesList.styled';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    //let newRecipes = [];
    const response = await fetch(
      `https://landing-page-3dc5c-default-rtdb.firebaseio.com/Recipes.json`
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
        name: responseData[key].Name,
        preparation: responseData[key].Preparation,
        photo: responseData[key].Photo,
        ingrediends: responseData[key].Ingrediends
      });
      
    }

    //console.log(loadedMeals[0].ingrediends);
    setRecipes(loadedMeals);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <StyledRecipeList>
        {recipes.map((meal) => (
          <Recipe
            key={meal.id}
            id={meal.id}
            name={meal.name}
            preparation={meal.preparation}
            photo={meal.photo}
            ingrediends={meal.ingrediends}
          />
        ))}
    </StyledRecipeList>
  );
};

export default RecipeList;
