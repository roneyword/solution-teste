import styled from "styled-components";

interface InputProps {
  error?: string;
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;

  label{
    margin-left: 12px;
    color: #5a5a5a;
    font-size: 0.70rem;
    font-family: 'Roboto';
    padding-bottom: 7px;
    display: block;
  }

  input{
    padding: 10px 12px;
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.error ? "#f34747" : "#e3e3e3"};
    color: #5a5a5a;
    font-size: 1rem;
    font-weight: normal;
    font-family: 'Roboto';
    outline: none;
    background: white;
  }

  .error{
    margin: 8px 0 0 12px;
    font-size: 12px;
    font-family: 'Roboto';
    color: #f34747;
  }

 
`