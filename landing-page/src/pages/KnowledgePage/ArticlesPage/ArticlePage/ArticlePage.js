import { StyledImgContainer, StyledArticlePage } from './ArticlePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const [articleObj, setArticleObj] = useState({
    photo: '',
    title: '',
    text: '',
  });

  let { id } = useParams();
  
  useEffect(() => {
    const getArticle = async () => {
      const response = await fetch(
        `https://landing-page-3dc5c-default-rtdb.firebaseio.com/Articles/${id}.json`
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      setArticleObj(responseData);

    };
    getArticle();
  }, [id]);

  

  return (
    <StyledArticlePage>
      <h1>{articleObj.title}</h1>
      <StyledImgContainer>
        <img alt="Article" src={articleObj.photo} />
      </StyledImgContainer>
      <p>{articleObj.text}</p>
    </StyledArticlePage>
  );
};

export default ArticlePage;