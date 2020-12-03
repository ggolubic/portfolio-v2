import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import { SocialContainer, IconContainer } from './index.styled';

const Social = () => {
  return (
    <SocialContainer>
      <IconContainer href="#" type="linkedin">
        <FaLinkedinIn size="3em" />
      </IconContainer>
      <IconContainer href="#" type="github">
        <FaGithub size="3em" />
      </IconContainer>
      <IconContainer href="#" type="ig">
        <FaInstagram size="3em" />
      </IconContainer>
    </SocialContainer>
  );
};

export default Social;
