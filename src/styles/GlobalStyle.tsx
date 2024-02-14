import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.mainFont};
    background-color: #f4f4f4;
  }

  h1, h2 {
    margin-top: 0;
  }

  ul, li {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  p {
    margin: 0;
  }

  img {
    width: 100%;
  }

  button {
    border: none;
    font: inherit;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    border: none;
    font: inherit;
  }
`;
export default GlobalStyle;
