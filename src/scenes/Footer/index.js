import React from 'react';
import styled from 'styled-components';

import { device } from 'consts/device';

import Social from './Social';
import Form from './Form';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 100px 0 30px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 4;
`;

const Content = styled.div`
  width: 95%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 60%;
  }
`;

const Copyright = styled.p`
  text-align: center;
  letter-spacing: 1px;
  color: var(--gray);
  @media ${device.tablet} {
    font-size: 1.2em;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin: 20px 0;
  text-align: center;
  font-size: 1.2em;
  @media ${device.tablet} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    font-size: 2em;
  }
`;

const Footer = () => {
  return (
    <Wrapper id="contact">
      <Content>
        <Text>Have an exciting project that you need help with? Shoot me a message.</Text>
        <Form />
        <Text>Or reach out through social media.</Text>
        <Social />
        <Copyright>©Gabrijel Golubic</Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;
