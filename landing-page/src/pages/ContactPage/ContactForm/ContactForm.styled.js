import styled from 'styled-components';
import { Colors } from '../../../utils/Colors';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: ${Colors.primaryFontColor};
  font-weight: bolder;
  margin: 2rem;
`;
export const StyledForm = styled(Form)`
    textarea.ant-input{
      border: 1px solid ${Colors.primaryFontColor};

      &:hover {
      background-color: #f7ebe5;
      border: 1px solid ${Colors.primaryFontColor};
    }

    &:focus {
    background-color: #f7ebe5;
    border: 1px solid ${Colors.primaryFontColor};
    box-shadow: none;
  }
    }
`;
export const StyledInput = styled(Input)`
  border: 1px solid ${Colors.primaryFontColor};

  &.active {
    //background-color: red;
    color: black;
  }

  &:focus {
    background-color: #f7ebe5;
    border: 1px solid ${Colors.primaryFontColor};
    box-shadow: none;
  }

  &:hover {
      background-color: #f7ebe5;
      border: 1px solid ${Colors.primaryFontColor};
    }


`;
export const StyledButton = styled(Button)`
  background-color: white;
  color: ${Colors.primaryFontColor};
  border: 1px solid ${Colors.primaryFontColor};
  transition: all 0.1s ease-in;
  font-family: 'Poppins', sans-serif;
  font-weight: bolder;

  &:hover {
    background-color: ${Colors.primaryFontColor};
    color: white;
    border: none;
  }
`;

export const StyledItem = styled(Form.Item)`
  min-width: 60vw;

  label {
    width: 120px;
    font-family: 'Poppins', sans-serif;
    color: #c4ab9d;
    font-weight: bolder;
  }

  textarea {
    width: 100%;
  }
`;
