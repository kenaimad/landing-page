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
  background-image: url('https://i.ibb.co/vxKxfKf/tlo.png');
`;

export const UniversalComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
