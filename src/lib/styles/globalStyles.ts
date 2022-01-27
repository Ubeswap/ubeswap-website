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

  .awardpool_embed {
    border-style: solid;
    border-color: #444444;
    border-radius: 20px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
    width: 360px;
    height: 630px;
    background-image: url(https://uploads-ssl.webflow.com/61c33c42512b0b08a67dc0c4/61e8880a99edfb593b24423f_lampblue.gif);
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1d1d1d;
    -ms-zoom: 1;
    -moz-transform: scale(1);
    -moz-transform-origin: 0 0;
    -o-transform: scale(1);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(1);
    -webkit-transform-origin: 0 0;
  }
`;
