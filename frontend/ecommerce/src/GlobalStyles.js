import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    primary: '#3498db',
    // color1: '#e74c3c',
    // color2: '#f39c12',
    // color1Light: '#9b59b6',
    // color2Light: '#34495e',
    // primaryLight: '#3498db',
  },
  fonts: {
    primary: 'Raleway, sans-serif',
    main: 'Arial, sans-serif',
    secondary: 'Georgia, serif',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.main};
    margin: 0;
    padding: 0;
  }

  /* Add more global styles here */

  h1 {
    font-family: ${theme.fonts.secondary};
    color: ${theme.palette.primary};
  }

  /* Add more component-specific styles here */
`;

const GlobalStyles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export { theme, GlobalStyles };