import { css } from '@emotion/react';

export const globals = css`
  html {
    box-sizing: border-box;
    font-size: 16px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: #333;
    color: var(--colourMain);
    font-family: 'Roboto', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
  }
    
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
  }
    
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
    
  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }

  a,
  button {
    color: inherit;
    transition: 0.3s;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    overflow: visible;
  }

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  :focus {
    outline: 0;
  }
`;
