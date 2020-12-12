import React from 'react';
import { ThemeProvider } from 'styled-components';

import Hero from 'scenes/Hero';
import About from 'scenes/About';
import Social from 'scenes/Social';
import CaseStudies from 'scenes/CaseStudies';
import GlobalStyles from 'src/styles/globalStyles.js';
import Navbar from 'src/common/Navbar';
import theme from 'src/styles/theme';

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Hero />
        <CaseStudies />
        <About />
        <Social />
      </ThemeProvider>
    </div>
  );
}
