import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import { SocialContainer, IconContainer } from './index.styled';

const Social = () => {
  return (
    <SocialContainer>
      <IconContainer href="#" type="linkedin">
        <FaLinkedinIn />
      </IconContainer>
      <IconContainer href="#" type="github">
        <FaGithub />
      </IconContainer>
      <IconContainer href="#" type="ig">
        <FaInstagram />
      </IconContainer>
    </SocialContainer>
  );
};

export default Social;
