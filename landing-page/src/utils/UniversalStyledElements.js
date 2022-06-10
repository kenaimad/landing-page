import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: column;
  max-width: 90%;
  //min-height: 80vh;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  font-size: ${(props) => props.fontSize}rem;
`;

export const StyledSubtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  font-size: ${(props) => props.fontSize}rem;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledParagraph = styled.p`
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-size: 1.1rem;
  font-size: ${(props) => props.fontSize}rem;
`;
