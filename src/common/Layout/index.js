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
  min-height: calc(100vh - 40px);
`;

const ContentStyles = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

const Layout = ({ location, title, children, className, pageContext, path, uri, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#fefaf6" />
      </Helmet>
      <LayoutStyles>
        <Navbar pageContext={pageContext} location={uri} />
        <MDXProvider components={mdxComponents}>
          <ContentStyles>{children}</ContentStyles>
        </MDXProvider>
        <Footer />
      </LayoutStyles>
    </ThemeProvider>
  );
};

export default Layout;
