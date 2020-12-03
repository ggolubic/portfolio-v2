import React from 'react';

import { PageContainer } from 'src/common/PageContainer';

import Banner from './components/Banner';
import Parallax from './components/Parallax';
import Social from './components/Social';

const Hero = () => {
  return (
    <PageContainer>
      <Parallax />
      <Banner />
      <Social />
    </PageContainer>
  );
};

export default Hero;
