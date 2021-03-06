import styled from 'styled-components';

export const StyledArticlesPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  width: 90%;
  min-height: 90vh;
  background-color: white;
  
  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;
