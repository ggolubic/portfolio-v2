import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from 'scenes/Hero';
import Social from 'scenes/Social';
import Work from 'scenes/CaseStudies';

const HomePage = ({ data, path }) => {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: 'en' }} title="Gabrijel Golubic - Frontend Web Developer" />
      <Hero />
      <Work />
      <Social />
    </div>
  );
};

export default HomePage;
