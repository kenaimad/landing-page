import styled from 'styled-components';

export const StyledTilesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
