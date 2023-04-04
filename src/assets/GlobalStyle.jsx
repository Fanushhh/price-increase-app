import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    
/* roboto-100 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url('fonts/roboto-v30-latin-100.eot'); /* IE9 Compat Modes */
  src: url('fonts/roboto-v30-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/roboto-v30-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/roboto-v30-latin-100.woff') format('woff'), /* Modern Browsers */
       url('fonts/roboto-v30-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/roboto-v30-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('fonts/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
  src: url('fonts/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('fonts/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
/* roboto-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url('fonts/roboto-v30-latin-700.eot'); /* IE9 Compat Modes */
  src: url('fonts/roboto-v30-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('fonts/roboto-v30-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('fonts/roboto-v30-latin-700.woff') format('woff'), /* Modern Browsers */
       url('fonts/roboto-v30-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('fonts/roboto-v30-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}
body{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:16px;
    
}




`