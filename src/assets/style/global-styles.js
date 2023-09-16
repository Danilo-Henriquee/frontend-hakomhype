import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #bdbdbd;
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
