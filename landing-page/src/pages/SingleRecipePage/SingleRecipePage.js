import {
  PreparationContainer,
  StyledImgContainer,
  PageWrapper,
  Title,
  Subtitle,
  Paragraph,
} from './SingleRecipePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IngrediendsSection from './Ingrediends/IngrediendsSection';
import { getRecipeCall } from '../../api/api';

const SingleRecipePage = () => {
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
    <PageWrapper>
      <Title fontSize="2.5">{recipeObj.name}</Title>
      <StyledImgContainer>
        <img alt="Meal" src={recipeObj.photo} />
      </StyledImgContainer>
      <Title fontSize="2">Składniki:</Title>
      <IngrediendsSection ingrediends={recipeObj.ingrediends} />

      <Subtitle fontSize="2">Sposób przygotowania:</Subtitle>
      <PreparationContainer>
        <Paragraph>{recipeObj.preparation}</Paragraph>
      </PreparationContainer>
    </PageWrapper>
  );
};

export default SingleRecipePage;
