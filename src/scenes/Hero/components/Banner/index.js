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

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const IllustrationWrapper = styled.div`
  z-index: 4;

  & > svg {
    display: block;
    width: 90%;
    height: auto;
    z-index: 5;
    margin: 0 auto;
  }
  @media ${device.tablet} {
    & > svg {
      width: 70%;
    }
  }
  @media ${device.laptop} {
    & > svg {
      width: 90%;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  margin-bottom: 40px;

  @media ${device.laptop} {
    text-align: left;
    margin-bottom: 0px;
  }
`;

const ShortDescription = styled.p`
  color: ${({ theme }) => theme.fonts.secondaryFontColor};
  font-size: 1.2em;
  margin: 15px auto 0px;
  line-height: 2;
  text-align: justify;
  z-index: 5;
  @media ${device.mobileL} {
    font-size: 1.5em;
  }
  @media ${device.mobileL} {
    max-width: 700px;
  }
`;
const Headline = styled.div`
  transition: 0.2s;
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.primaryFontColor};
  & > h1 {
    font-size: 2.6em;
    @media ${device.mobileM} {
      font-size: 2.7em;
    }
    @media ${device.mobileL} {
      font-size: 3.1em;
    }
    @media ${device.tablet} {
      font-size: 5.5em;
    }
    @media ${device.laptop} {
      text-align: left;
    }
    @media ${device.desktop} {
      font-size: 6em;
    }
  }
  & > h2 {
    font-size: 2.1em;

    @media ${device.mobileL} {
      font-size: 2.45em;
    }
    @media ${device.tablet} {
      font-size: 4.5em;
    }
    @media ${device.laptop} {
      font-size: 3.4em;
      text-align: left;
    }
    @media ${device.laptopM} {
      font-size: 4em;
    }
  }
`;

const Banner = () => {
  return (
    <HeroWrapper>
      <Wrapper>
        <Headline>
          <h1>
            Hi, I'm <Name>Gabrijel.</Name>
          </h1>
          <h2>Software engineer.</h2>
        </Headline>
        <ShortDescription>
          I mostly work with frontend techologies bringing products from technical discovery to
          life. I also like exploring new techologies and occasionally contribute to open source.
        </ShortDescription>
      </Wrapper>
      <IllustrationWrapper>
        <ComplexDashboardSvg />
      </IllustrationWrapper>
    </HeroWrapper>
  );
};

export default Banner;
