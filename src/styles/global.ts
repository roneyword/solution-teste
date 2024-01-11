import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    background: #F8F8F9;
    -webkit-font-smooth: antialiased;
  }

  body, input, text-area, button{
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;