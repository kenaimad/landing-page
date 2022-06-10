import { StyledImgContainer, PageWrapper, Subtitle } from './SingleArticlePage.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './ArticleElements/ArticleContent/ArticleContent';
import ArticleBibliography from './ArticleElements/ArticleBibliography/ArticleBibliography';
import { getArticleCall } from '../../api/api';
import { StyledImg } from '../../utils/UniversalStyledElements';

const SingleArticlePage = () => {
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
    <PageWrapper>
      <StyledImgContainer>
        <StyledImg alt="Article" src={articleObj.photo} />
      </StyledImgContainer>
      <ArticleContent content={articleObj.content} />
      <Subtitle>Piśmiennictwo</Subtitle>
      <ArticleBibliography bibliography={articleObj.bibliography} />
    </PageWrapper>
  );
};

export default SingleArticlePage;
