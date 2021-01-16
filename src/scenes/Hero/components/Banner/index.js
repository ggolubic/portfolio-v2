import React from 'react';
import styled from 'styled-components';

import { device } from 'src/consts/device.js';
import ComplexDashboardSvg from 'src/assets/svgs/complex-dashboard.svg';

const Name = styled.span`
  color: var(--primary-color);
`;

const HeroWrapper = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  > div {
    width: 100%;
  }

  & > svg {
    width: 90%;
    height: auto;
    z-index: 5;
  }
  @media ${device.laptop} {
    flex-direction: row;
    width: 90%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  @media ${device.laptop} {
    text-align: left;
  }
`;
const ShortDescription = styled.p`
  color: ${({ theme }) => theme.fonts.secondaryFontColor};
  font-size: 1.1em;
  max-width: 700px;
  line-height: 2;
  margin-top: 15px;
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
`;
const Headline = styled.h1`
  font-size: 2.3em;
  line-height: 1.2;
  color: ${({ theme }) => theme.primaryFontColor};
  transition: 0.2s;
  @media ${device.mobileM} {
    font-size: 2.8em;
  }
  @media ${device.mobileL} {
    font-size: 3.3em;
  }
  @media ${device.tablet} {
    font-size: 5.5em;
  }
  @media ${device.laptop} {
    font-size: 5.5em;
  }
  @media ${device.desktop} {
    font-size: 7em;
  }
`;

const Banner = () => {
  return (
    <HeroWrapper>
      <Wrapper>
        <Headline>
          Hi, I'm <Name>Gabrijel.</Name>
          <br />
          Web developer.
        </Headline>
        <ShortDescription>
          I also enjoy playing with various other technologies, participating in community events
          and helping out open source projects.
        </ShortDescription>
      </Wrapper>
      <ComplexDashboardSvg />
    </HeroWrapper>
  );
};

export default Banner;
