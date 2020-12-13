import React from 'react';
import styled from 'styled-components';

import Container from 'common/Container';
import Image from './components/Image';

import { device } from 'consts/device';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #00cdac;
  color: white;
  padding-bottom: 10%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

const SectionTitle = styled.h1`
  font-size: 3.5em;
  text-align: center;
  font-weight: 700;
  margin: 2em 0;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  & > * {
    width: 50%;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const Text = styled.p``;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle>About me</SectionTitle>
        <SectionContent>
          <Image imageName="profile.jpg" />
          <Text>
            Born and raised in Split, Croatia where I graduated from FESB in computer science and am
            currently pursuing a Masters degree. My passion for computers and gaming started at a
            very young age when I was first introduced to Half Life. My very first job was at a
            local computer shop where I worked throughout highschool. Having tried and dabbled in a
            lot of languages, I've discovered a passion for Web development. In my spare time I
            enjoy learning new stuff, traveling, lifting heavy things, eating spicy food and
            drinking beer! Currently working as a front-end developer at SeekandHit.
          </Text>
        </SectionContent>
      </Container>
    </Section>
  );
};

export default About;
