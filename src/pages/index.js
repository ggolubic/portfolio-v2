import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from 'scenes/Hero';
import Work from 'scenes/CaseStudies';
import Toast from 'common/Toast';

const HomePage = () => {
  return (
    <div id="top">
      <Helmet>
        <title>Gabrijel Golubic | Software engineer</title>
        <meta
          name="description"
          content="Hi, I'm Gabrijel. A software engineer. I mostly work with frontend techologies bringing products from technical discovery to
          life."
        />
        <meta name="theme-color" content="#fefaf6" />
      </Helmet>
      <Hero />
      <Work />
      <Toast />
    </div>
  );
};

export default HomePage;
