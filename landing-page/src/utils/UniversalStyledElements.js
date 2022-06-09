import styled from 'styled-components';

export const ComponentWrapper = styled.div``;

export const StyledTitle = styled.h1``;

export const StyledSubtitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
  text-align: center;
  font-weight: bold;
  font-size: ${(props) => props.fontSize}rem;

  @media (max-width: 1600px) {
    font-size: ${(props) => props.fontSize * 1.3}rem;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.fontSize * 1.1}rem;
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSize * 1.5}rem;
  }
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
  font-size: ${(props) => props.fontSize}rem;

  @media (max-width: 1600px) {
    font-size: ${(props) => props.fontSize * 1.3}rem;
  }

  @media (max-width: 1300px) {
    font-size: ${(props) => props.fontSize * 1.1}rem;
  }

  @media (max-width: 1080px) {
    font-size: ${(props) => props.fontSize * 1.5}rem;
  }
`;
