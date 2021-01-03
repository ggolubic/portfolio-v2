import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from 'scenes/Hero';
import Work from 'scenes/CaseStudies';

const HomePage = ({ data, path }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Helmet htmlAttributes={{ lang: 'en' }} title="Gabrijel Golubic - Frontend Web Developer" />
      <Hero />
      <Work />
    </div>
  );
};

export default HomePage;
