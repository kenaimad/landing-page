import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  //margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 80%;
  background-color: white;
  height: 100vh;
  //background-image: url('https://i.ibb.co/vxKxfKf/tlo.png');

  img {
  }
`;

export const PhotoWrapper = styled.div`
  margin: 1rem;
  max-height: 40vh;
  max-width: 50%;
  border: 1px solid #c4ab9d;
  padding: 1rem;
`;

export const StyledPhoto = styled.img`
max-width:100%;
max-height:100%;
`;

export const GallerySection = styled.section`
  display: flex;
  justify-content: center;
  //height: 200px;
  max-width: 80%;
`;
