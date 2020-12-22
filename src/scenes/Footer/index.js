import React from 'react';
import styled from 'styled-components';

import { device } from 'consts/device';

const Wrapper = styled.div`
  width: 100%;
  padding: 8% 0;
  z-index: 11;
  background-color: var(--primary-color);
`;
const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 50%;
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
  color: white;
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
      background: white;
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

const Footer = () => {
  return (
    <Wrapper id="contact">
      <Content>
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
