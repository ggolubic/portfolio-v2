import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import { device } from 'src/consts/device.js';

export const SocialContainer = styled.div`
  display: flex;
  width: 200px;
  margin: 50px auto 0;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
`;

export const IconContainer = styled.a`
  margin-bottom: 30px;
  transition: 0.2s;

  svg {
    font-size: 2em;
  }
  @media ${device.laptop} {
    svg {
      font-size: 3em;
    }
  }

  &:hover {
    transform: scale(1.2);
    color: ${({ theme, type }) => theme.colors[type]};
  }
`;

const Social = () => {
  return (
    <SocialContainer>
      <IconContainer
        href="https://linkedin.com/in/gabrijel-golubic"
        rel="noopener"
        target="_blank"
        type="linkedin"
      >
        <FaLinkedinIn />
      </IconContainer>
      <IconContainer
        href="https://github.com/ggolubic"
        rel="noopener"
        target="_blank"
        type="github"
      >
        <FaGithub />
      </IconContainer>
      <IconContainer
        href="https://www.instagram.com/gabrijelgolubic"
        rel="noopener"
        target="_blank"
        type="ig"
      >
        <FaInstagram />
      </IconContainer>
    </SocialContainer>
  );
};

export default Social;
