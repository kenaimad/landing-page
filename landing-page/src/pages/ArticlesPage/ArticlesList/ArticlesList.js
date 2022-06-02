import { useEffect, useState } from 'react';
//import API from '../../../../api/api';
import Article from './Article/Article';
import { StyledArticleList } from './ArticlesList.styled';

import { getArticlesCall } from '../../../api/api';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    getArticlesCall().then((data) => {
      setArticles(data);
    });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <StyledArticleList>
      {articles.map((article) => (
        <Article key={article.id} id={article.id} photo={article.photo} />
      ))}
    </StyledArticleList>
  );
};

export default ArticleList;
