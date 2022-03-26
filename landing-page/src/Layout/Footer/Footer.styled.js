import styled from 'styled-components';

export const StyledFooter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //height: 3rem;
  width: 100%;
  border-top: 1px solid #c4ab9d;
  background-color: white;
`;

export const StyledContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled.div`
  img {
    object-fit: contain;
    width: 100px;
    margin-right: 1rem;
    padding-top: 0.5rem;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-size: 0.8rem;
    font-weight: bold;
  }

  div {
    display: flex;

    p {
      padding-top: 0.4rem;
    }
  }

  img {
    object-fit: contain;
    width: 20px;
    margin-right: 1rem;
    padding-top: 0.5rem;
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
