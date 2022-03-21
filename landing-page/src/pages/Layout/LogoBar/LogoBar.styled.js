import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 15vh;
  width: 100%;
  background-color: yellow;
`;

export const LogoWrapper = styled.div`
  padding: 2rem 0rem;
  align-self: center;
  cursor: pointer;
`;

export const StyledLogo = styled.img`
  object-fit: contain;
  flex-grow: 1;
  width: 70px;
  margin-right: 1rem;
  padding-top: 0.5rem;
`;
