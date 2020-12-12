import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  transition: 0.5s ease;
  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: #fff6eb;
      z-index: 20;
      box-shadow: 0px 6px 12px 0px #f9efe4;
    `}
`;

const LinksWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50 && !scrolled) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <Wrapper scrolled={scrolled}>
      <p>LOGO</p>
      <LinksWrapper>
        <a>Case Studies</a>
        <a>About</a>
        <a>Contact</a>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navbar;
