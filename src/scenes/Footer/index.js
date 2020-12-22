import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 8% 0;
  z-index: 11;
  background-color: var(--primary-color);
`;
const Content = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  ${({ direction }) => direction && `flex-direction:${direction}`}
  justify-content:space-around;
  margin-bottom: 20px;
`;

const Link = styled.a`
  position: relative;
  font-size: 1.5em;
  cursor: pointer;
  color: white;
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
  &:hover::before {
    width: 90%;
    background: white;
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.2em;
  letter-spacing: 1px;
`;

const Footer = () => {
  return (
    <Wrapper>
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
