import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);

    h1,
    h2 {
      text-align: center;
      font-weight: 600;
    }

    h1, p {
      margin-block-start: 0;
      line-height: 1.4em;
    }

    a {
      color: rgba(19, 75, 244, 0.85);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
