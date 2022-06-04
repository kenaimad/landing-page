import {
  PreparationContainer,
  StyledImgContainer,
  StyledRecipePage,
} from './RecipePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngrediendsSection from './Ingrediends/IngrediendsSection';
import { getRecipeCall } from '../../../api/api';

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
    const getRecipe = () => {
      getRecipeCall(id).then((data) => {
        setRecipeObj(data);
      });
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
