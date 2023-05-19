import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  pinkBody: '#fcfcf4',
  white: '#FFF',
  pinkFooter: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
}

body{
  background-color:${colors.pinkBody};
}

.container{
  max-width:${breakpoints.desktop};
  width:100%;
  margin:0 auto;
}
`
