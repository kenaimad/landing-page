import { useEffect, useState } from 'react';
import { getRecipesCall } from '../../../api/api';

import Recipe from './Recipe/Recipe';
import { PageWrapper } from './RecipesList.styled';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {

    getRecipesCall().then((data) => {
      setRecipes(data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <PageWrapper>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            mainPhoto = {recipe.mainPhoto}
          />
        ))}
    </PageWrapper>
  );
};

export default RecipeList;
