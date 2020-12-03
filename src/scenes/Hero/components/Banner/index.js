import React from 'react';
import styled from 'styled-components';

import { device } from 'src/consts/device.js';
import Container from 'common/Container';

const Name = styled.span`
  color: ${({ theme }) => theme.colors.turqoise};
`;

const InnerContainer = styled.h1`
  text-align: center;
  font-size: 4em;
  color: ${({ theme }) => theme.primaryFontColor};
  @media ${device.tablet} {
    font-size: 5.5em;
  }
  @media ${device.laptop} {
    font-size: 6.5em;
    margin-right: 30%;
    text-align: left;
  }
  @media ${device.laptopL} {
    font-size: 8em;
  }
`;

//https://gatsby-simplefolio.netlify.app/
//https://github.com/cobidev/gatsby-simplefolio/blob/master/src/components/Hero/Hero.jsx
const Banner = () => {
  return (
    <InnerContainer>
      Hi. I'm <Name>Gabrijel.</Name>
      <br />
      Web developer.
    </InnerContainer>
  );
};

export default Banner;
