import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { StaticImage } from 'gatsby-plugin-image';

import { device } from 'consts/device';

const OuterWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.5s ease;
  height: 65px;
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
  margin: 0 auto;
  justify-content: space-between;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  padding: ${({ isLogo }) => (isLogo ? '10px' : '20px 10px')};
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
  @media ${device.tablet} {
    padding: ${({ isLogo }) => !isLogo && '20px'};
  }
`;

const StyledDirectLink = styled(AniLink)`
  padding: ${({ isLogo }) => (isLogo ? '10px' : '20px 10px')};
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
  @media ${device.tablet} {
    padding: ${({ isLogo }) => !isLogo && '20px'};
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

    ${StyledScrollLink}:hover & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }
    ${StyledScrollLink}.active & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(2deg);
    }
    ${StyledDirectLink}:hover & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(-2deg);
    }
    ${StyledDirectLink}.active & {
      opacity: 1;
      transform: scale3d(1.1, 1.1, 1.1) rotate(2deg);
    }
  }
`;

const LogoImage = () => {
  return (
    <StaticImage
      src="../../assets/images/logo.png"
      alt="My initial"
      placeholder="blurred"
      width={40}
      height={40}
    />
  );
};

//uri=/about, to=/about
const Link = ({ internal, text, to, id, uri, isLogo, children }) => {
  if (uri === to || internal) {
    return (
      <StyledScrollLink
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        duration={1000}
        offset={-100}
        isLogo={isLogo}
      >
        {children ? children : <LinkContent>{text}</LinkContent>}
      </StyledScrollLink>
    );
  }

  return (
    <StyledDirectLink paintDrip hex="#fefaf6" duration={0.8} to={to} isLogo={isLogo}>
      {children ? children : <LinkContent>{text}</LinkContent>}
    </StyledDirectLink>
  );
};

const Navbar = ({ location }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50 && !scrolled) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <OuterWrapper scrolled={scrolled}>
      <Wrapper>
        <Link to="/" internal={location === '/'} uri={location} id="top" isLogo>
          <LogoImage />
        </Link>
        <LinksWrapper>
          <Link uri={location} internal={location === '/'} id="work" to="/#work" text="Work" />
          <Link uri={location} id="about" to="/about" text="About" />
          <Link uri={location} internal id="contact" to={location} text="Contact" />
        </LinksWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default Navbar;
