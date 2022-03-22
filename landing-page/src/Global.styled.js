import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ApplicationWrapper = styled.div`
  //height: 120vh;
`;

export const UniversalComponentContainer = styled.div`
  min-height: 100vh;
`;
