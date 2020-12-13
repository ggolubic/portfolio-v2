import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
  transition: 0.5s ease;
  cursor: pointer;
  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: #fff6eb;
      z-index: 20;
    `}
`;

const LinksWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  & > a {
    font-weight: 700;
    font-size: 1.3em;
    text-transform: uppercase;
    &.active {
      color: var(--primary-color);
    }
  }
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
      <Link
        activeClass="active"
        to="landing"
        spy={true}
        smooth={true}
        duration={1000}
        offset={-100}
      >
        <p>LOGO</p>
      </Link>
      <LinksWrapper>
        <Link
          activeClass="active"
          to="caseStudies"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Case Studies
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} offset={-50}>
          About
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
          Contact
        </Link>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Navbar;
