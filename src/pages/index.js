import React from 'react';
import { ThemeProvider } from 'styled-components';

import Hero from 'scenes/Hero';
import About from 'scenes/About';
import Social from 'scenes/Social';
import Work from 'scenes/CaseStudies';
import Footer from 'scenes/Footer';
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
        <Work />
        {/* <About /> */}
        <Footer />
        <Social />
      </ThemeProvider>
    </div>
  );
}
