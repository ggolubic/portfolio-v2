import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Fade from 'react-reveal/Fade';

import Oops from 'assets/images/jennifer.gif';

import { device } from 'consts/device';

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 800px;
  margin: 50px auto;
`;

const StyledImage = styled.img`
  width: 80%;
  padding: 50px;
  align-self: center;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const H1 = styled.h1`
  font-size: 2em;
  @media ${device.tablet} {
    font-size: 3em;
  }
`;

const StyledButton = styled.button`
  font-family: var(--primaryFontFamily);
  max-width: 200px;
  background: var(--primary-color);
  font-size: 1.2em;
  color: white;
  margin: 0 auto;
  padding: 10px;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 11px -1px rgba(0, 0, 0, 0.6);
  }
`;

const NotFoundPage = ({ path }) => {
  return (
    <CenterWrapper>
      <H1>{`Oops, the page at ${path} was not found.`}</H1>
      <StyledImage loading="lazy" src={Oops} alt="This page doesn't exist" />
      <Fade>
        <StyledButton onClick={() => navigate(-1, { replace: true })}>
          Click to go back
        </StyledButton>
      </Fade>
    </CenterWrapper>
  );
};

export default NotFoundPage;
