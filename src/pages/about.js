import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import { device } from 'consts/device';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  width: 100%;
  & > div {
    object-fit: contain;
    width: 100%;
    height: 400px;
  }
`;

const Image = ({ image }) => {
  return (
    <Wrapper>
      <Img fluid={image.childImageSharp.fluid} alt="A picture of me hoarding registers" />
    </Wrapper>
  );
};

const Section = styled.section`
  display: flex;
  padding: 100px 0;
  min-height: 80vh;
`;

const Link = styled.a`
  position: relative;
  transition: 0.15s;
  cursor: pointer;
  color: #c5283d;

  &::before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    bottom: -5px;
    height: 3px;
    left: 0;
    background: #c5283d;
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  :hover::before {
    transform: scale3d(1.1, 1.1, 1.1) rotate(-2deg);
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  & > * {
    width: 100%;
    margin: 0 auto;
    max-width: 600px;
  }
  & > :first-child {
    max-width: 580px;
    height: auto;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  .gatsby-image-wrapper {
    border-radius: 10px;
    box-shadow: 0px 5px 15px -7px rgb(0 0 0 / 75%);
  }

  @media ${device.laptopM} {
    flex-direction: row;
    margin: 100px auto;
    & > * {
      width: 50%;
    }
    & > :first-child {
      margin-right: 50px;
    }
  }
`;

const Highlight = styled.h1`
  font-size: 2.5em;
  line-height: 1.5;
  margin-bottom: 25px;
`;

const Info = styled.p`
  text-align: justify;
  line-height: 2;
  color: var(--gray);
  font-size: 1.4em;
  margin-bottom: 20px;
`;

const About = ({ data }) => {
  return (
    <Section id="about">
      <Helmet htmlAttributes={{ lang: 'en' }} title="Gabrijel Golubic | About" />
      <SectionContent>
        <Image image={data.profileImage} />
        <div>
          <Highlight>
            I’m Gabrijel, a software engineer working for{' '}
            <Link href="https://seekandhit.com/" rel="noopener noreferrer" target="_blank">
              SeekandHit
            </Link>{' '}
            in sunny Split, Croatia.
          </Highlight>
          <Info>
            Spending the better part of my life interacting with computers, I've always been curious
            about how things were made. I soon realized I had a passion for programming and for the
            past three years, I've been working as a software engineer.
          </Info>
          <Info>
            These days I mostly spend my time researching new stuff, coding and helping out open
            source libraries.
          </Info>
          <Info>
            Out of the office you’ll probably find me playing videogames, in the gym, enjoying food
            and beer, and petting all the dogs.
          </Info>
        </div>
      </SectionContent>
    </Section>
  );
};

export default About;

export const query = graphql`
  query ProfileImageQuery {
    profileImage: file(relativePath: { eq: "pp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450, maxHeight: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
