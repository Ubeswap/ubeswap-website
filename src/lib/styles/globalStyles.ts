import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: rgb(44, 47, 54);
  }

  body {
    font-family: Archivo, sans-serif;
    color: #fff;

    min-height: 100vh;
    background-position: 0px -30vh;
    background-repeat: no-repeat;
    background-image: radial-gradient(
      50% 50% at 50% 50%,
      rgba(136, 120, 195, 0.1) 0%,
      rgba(33, 36, 41, 0) 100%
    );
  }
`;
