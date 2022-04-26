import { useEffect, useState } from 'react';
//import API from '../../../../api/api';
import Article from './Article/Article';
import { StyledArticleList } from './ArticlesList.styled';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    //let newRecipes = [];
    const response = await fetch(
      `https://landing-page-3dc5c-default-rtdb.firebaseio.com/Articles.json`
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
        title: responseData[key].title,
        text: responseData[key].text,
        photo: responseData[key].photo,
      });
      
    }

    //console.log(loadedMeals[0].ingrediends);
    setArticles(loadedArticles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <StyledArticleList>
        {articles.map((article) => (
          <Article
            key={article.id}
            id={article.id}
            title={article.title}
            photo={article.photo}
            text={article.text}
          />
        ))}
    </StyledArticleList>
  );
};

export default ArticleList;
