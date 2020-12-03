import React from 'react';
import { ThemeProvider } from 'styled-components';

import Hero from 'scenes/Hero';
import About from 'scenes/About';
import GlobalStyles from 'src/styles/globalStyles.js';
import theme from 'src/styles/theme';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Hero />
        <About />
      </ThemeProvider>
    </>
  );
}
