import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

import { device } from 'consts/device';

const OuterWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.5s ease;
  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: #fff6eb;
      z-index: 5;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1600px;
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

const LinksWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Link = styled(ScrollLink)`
  padding: 20px;
  font-weight: 700;
  font-size: 1.3em;
  text-transform: uppercase;
  transition: 0.15s;
  cursor: pointer;
  &.active {
    color: var(--primary-color);
  }
  &:hover {
    color: var(--primary-color);
  }
`;

const LinkContent = styled.span`
  position: relative;
  &::before {
    z-index: 5;
    content: '';
    width: 100%;
    position: absolute;
    bottom: -10px;
    height: 3px;
    left: 0;
    display: block;
    background: var(--primary-color);
    transform: translate3d(0, 5px, 0);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 0;

    ${Link}:hover & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }
    ${Link}.active & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(2deg);
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
    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <OuterWrapper scrolled={scrolled}>
      <Wrapper>
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
            to="work"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <LinkContent>Work</LinkContent>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-50}
          >
            <LinkContent>About</LinkContent>
          </Link>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
            Contact
          </Link>
        </LinksWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navbar;
