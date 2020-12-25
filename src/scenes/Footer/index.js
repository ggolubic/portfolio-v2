import React from 'react';
import styled from 'styled-components';

import { device } from 'consts/device';

import Form from './Form';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 100px 0 30px;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 11;
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 60%;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 20px;
  text-align: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Link = styled.a`
  position: relative;
  font-size: 1.5em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 10px;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    z-index: 5;
    transition: 0.35s;
  }
  @media ${device.tablet} {
    &:hover::before {
      width: 90%;
      background: var(--primary-color);
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  letter-spacing: 1px;

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
        <Text>Or reach out through social media below.</Text>
        <Flex>Logo</Flex>
        <Flex>
          <Link href="#" rel="noopener" target="_blank">
            LinkedIn
          </Link>
          <Link href="#" rel="noopener" target="_blank">
            Github
          </Link>
          <Link href="#" rel="noopener" target="_blank">
            Instagram
          </Link>
        </Flex>
        <Copyright>© 2020 Gabrijel Golubic</Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;
