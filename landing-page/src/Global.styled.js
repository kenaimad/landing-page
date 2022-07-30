import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Poppins', sans-serif;
  color: #c4ab9d;
}

html {
  font-size: 12px;

  @media (max-width: 1600px) {
    font-size: 11px;
  }

  @media (max-width: 1300px) {
    font-size: 10px;
  }

  @media (max-width: 1200px) {
    font-size: 10px;
  }

  @media (max-width: 1080px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 10px;
  }

  @media (max-width: 600px) {
    font-size: 8px;
  }
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
`;

export const ApplicationWrapper = styled.div`
  background-image: url('https://i.ibb.co/vxKxfKf/tlo.png');
`;

export const UniversalComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
