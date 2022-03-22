import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  //margin: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80vh;
  background-image: url('https://i.ibb.co/vxKxfKf/tlo.png');
`;

export const PhotoWrapper = styled.div`
  margin: 1rem;
  align-self: center;
  cursor: pointer;
  max-width: 80vw;
  border: 1px solid #c4ab9d;
`;

export const StyledPhoto = styled.img`
  object-fit: contain;
  max-width: 75vw;
  padding: 1rem;
`;
