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
        data.preparation = data.preparation.replaceAll(' w ',' w\u00a0');
        data.preparation = data.preparation.replaceAll(' W ',' W\u00a0');
        data.preparation = data.preparation.replaceAll(' i ',' I\u00a0');
        setRecipeObj(data);
      });
    };

    getRecipe();
  }, [id]);

  return (
    <PageWrapper>
      <Title>{recipeObj.name}</Title>
      <StyledImgContainer>
        <img alt="Meal" src={recipeObj.photo} />
      </StyledImgContainer>
      <Title>Składniki:</Title>
      <IngrediendsSection ingrediends={recipeObj.ingrediends} />

      <Subtitle>Sposób przygotowania:</Subtitle>
      <PreparationContainer>
        <Paragraph>{recipeObj.preparation}</Paragraph>
      </PreparationContainer>
    </PageWrapper>
  );
};

export default SingleRecipePage;
