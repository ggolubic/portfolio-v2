import React from 'react';

import { PageContainer } from 'src/common/PageContainer';

import Banner from './components/Banner';
import Parallax from './components/Parallax';

const Hero = () => {
  return (
    <PageContainer id="landing">
      <Parallax />
      <Banner />
    </PageContainer>
  );
};

export default Hero;
