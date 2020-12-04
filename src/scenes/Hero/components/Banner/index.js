import React from 'react';
import styled from 'styled-components';

import { device } from 'src/consts/device.js';
import ComplexDashboardSvg from 'src/images/complex-dashboard.svg';

const Name = styled.span`
  color: ${({ theme }) => theme.colors.turqoise};
`;

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 90%;
  margin: 0 auto;

  & > svg {
    color: ${({ theme }) => theme.colors.turqoise};
    width: 90%;
    height: auto;
  }
  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 0;
    > svg {
      width: 40%;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media ${device.laptop} {
    text-align: left;
  }
`;
const ShortDescription = styled.p`
  color: ${({ theme }) => theme.fonts.secondaryFontColor};
  font-size: 1.3em;
  max-width: 700px;
  line-height: 2;
  margin-top: 15px;
  @media ${device.tablet} {
    font-size: 1.5em;
  }
`;
const Headline = styled.h1`
  font-size: 3.3em;
  line-height: 1.2;
  color: ${({ theme }) => theme.primaryFontColor};
  transition: 0.2s;
  @media ${device.mobileL} {
    font-size: 4em;
  }
  @media ${device.tablet} {
    font-size: 5.5em;
  }
  @media ${device.laptop} {
    font-size: 6.5em;
  }
  @media ${device.laptopL} {
    font-size: 7em;
  }
`;

//https://gatsby-simplefolio.netlify.app/
//https://github.com/cobidev/gatsby-simplefolio/blob/master/src/components/Hero/Hero.jsx
const Banner = () => {
  return (
    <HeroWrapper>
      <Wrapper>
        <Headline>
          Hi. I'm <Name>Gabrijel.</Name>
          <br />
          Web developer.
        </Headline>
        <ShortDescription>
          I also like playing with CI/CD stuff and contribute to Open Source when I find something
          interesting.
        </ShortDescription>
      </Wrapper>
      <ComplexDashboardSvg />
    </HeroWrapper>
  );
};

export default Banner;
