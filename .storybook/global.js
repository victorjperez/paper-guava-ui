
import { createGlobalStyle, css } from 'styled-components';


export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  * {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
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