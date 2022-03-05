import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from 'scenes/Hero';
import Work from 'scenes/CaseStudies';
import Toast from 'common/Toast';

const HomePage = ({ data, path }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Helmet htmlAttributes={{ lang: 'en' }} title="Gabrijel Golubic | Web Dev" />
      <Hero />
      <Work />
      <Toast />
    </div>
  );
};

export default HomePage;
