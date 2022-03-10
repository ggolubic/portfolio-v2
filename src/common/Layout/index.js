import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import Navbar from '../Navbar';
import Footer from 'scenes/Footer';
import GlobalStyles from 'styles/globalStyles';
import theme from 'styles/theme';

import mdxComponents from '../MdxComponents';

const LayoutStyles = styled.div`
  position: relative;
  display: block;
  min-height: calc(100vh - 40px);
`;

const ContentStyles = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Layout = ({ children, pageContext, uri }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutStyles>
        <Navbar location={uri} />
        <MDXProvider components={mdxComponents}>
          <ContentStyles>{children}</ContentStyles>
        </MDXProvider>
        {pageContext?.layout !== 'notfound' && <Footer />}
      </LayoutStyles>
    </ThemeProvider>
  );
};

export default Layout;
