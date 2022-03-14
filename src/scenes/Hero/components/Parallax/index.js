import React from 'react';
import styled, { keyframes } from 'styled-components';

import theme from 'src/styles/theme';

const randomColor = () => {
  const rand = Math.round(Math.random() * 5);
  switch (rand) {
    case 1:
      return theme.colors.yellow;
    case 2:
      return theme.colors.pink;
    case 3:
      return theme.colors.blue;
    case 4:
      return theme.colors.turqoise;
    case 5:
      return theme.colors.black;
    default:
      return theme.colors.black;
  }
};

// n is number of stars required
const getMultipleStars = (n) => {
  let val = `${Math.round(Math.random() * 2000)}px ${Math.round(
    Math.random() * 2000,
  )}px ${randomColor()}`;
  for (let i = 2; i < n; i++) {
    val += `, ${Math.round(Math.random() * 2000)}px ${Math.round(
      Math.random() * 2000,
    )}px ${randomColor()}`;
  }
  return val;
};

const shadowsSmall = getMultipleStars(700);
const shadowsMedium = getMultipleStars(200);
const shadowsBig = getMultipleStars(100);

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  height: 100vh;
  width: 120%;
`;

const animStar = keyframes`
  from {
    transform: translateY(-2000px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Stars1 = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;
const Stars2 = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;
const Stars3 = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;
const Parallax = () => (
  <Wrapper>
    <Stars1 />
    <Stars2 />
    <Stars3 />
  </Wrapper>
);

export default Parallax;
