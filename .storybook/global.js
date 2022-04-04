
import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  * {
    font-family: "Goudy Bookletter 1911", serif;
    box-sizing: content-box;
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  button {
    padding: 0;
    margin: 0;
    font-size: inherit;
    border-radius: none;
    background-color: inherit;
    border: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;