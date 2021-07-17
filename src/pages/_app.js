import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { AlurakutStyles } from '../lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`

  //Reset CSS

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
    background-image: url("https://media.cntraveler.com/photos/58d56b31ed5947303561e60b/16:9/w_1920,c_limit/GettyImages-628874708.jpg");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
  }

  /* pegando referencia pelo id */
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width:100%;
    height: auto;
    display: block;
  }

  ${ AlurakutStyles }

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
