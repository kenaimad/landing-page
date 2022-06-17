import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  max-width: 90%;
  min-height: 80vh;
  background-color: white;

  @media (max-width: 1080px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  font-size: ${(props) => props.fontSize}rem;
  color: #c4ab9d;
`;

export const StyledSubtitle = styled.h2`
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  font-size: ${(props) => props.fontSize}rem;
  color: #c4ab9d;
`;

export const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledParagraph = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
  font-size: ${(props) => props.fontSize}rem;
`;

export const UnorderedList = styled.ul`
  font-weight: bold;
`;

export const OrderedList = styled.ul`
  font-weight: bold;
`;

export const StyledA = styled.a`
  font-weight: bold;
  color: #c4ab9d;
`;
