export const getArticlesCall = async () => {
  //let newRecipes = [];
  const response = await fetch(
    `https://landing-page-3dc5c-default-rtdb.firebaseio.com/articles.json`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  //console.log(responseData);

  const loadedArticles = [];

  for (const key in responseData) {
    loadedArticles.push({
      id: key,
      photo: responseData[key].photo,
    });
  }

  return loadedArticles;
};

export const getRecipesCall = async () => {
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


  return loadedMeals;
};

export const getRecipeCall = async (id) => {
  let newRecipe;
  const response = await fetch(
    `https://landing-page-3dc5c-default-rtdb.firebaseio.com/recipes/${id}.json`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  newRecipe = responseData;

  return newRecipe;
};

export const getArticleCall = async (id) => {
  const response = await fetch(
    `https://landing-page-3dc5c-default-rtdb.firebaseio.com/articles/${id}.json`
  );

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  return responseData;

};
