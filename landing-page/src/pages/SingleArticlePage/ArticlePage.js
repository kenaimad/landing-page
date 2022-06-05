import { StyledImgContainer, StyledArticlePage } from './ArticlePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './ArticleElements/ArticleContent/ArticleContent';
import ArticleBibliography from './ArticleElements/ArticleBibliography/ArticleBibliography';
import { getArticleCall } from '../../api/api';

const ArticlePage = () => {
  const [articleObj, setArticleObj] = useState({
    photo: '',
    title: '',
    content: [],
    bibliography: [],
  });

  let { id } = useParams();

  useEffect(() => {
    const getArticle = () => {
      getArticleCall(id).then((data) => {
        setArticleObj(data);
      });
    };
    getArticle();
  }, [id]);

  return (
    <StyledArticlePage>
      <StyledImgContainer>
        <img alt="Article" src={articleObj.photo} />
      </StyledImgContainer>
      <ArticleContent content={articleObj.content} />
      <h3>Piśmiennictwo</h3>
      <ArticleBibliography bibliography={articleObj.bibliography} />
    </StyledArticlePage>
  );
};

export default ArticlePage;
