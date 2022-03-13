import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage } from 'gatsby-plugin-image';

import Heading from 'common/MdxComponents/Headings';
import ContentNav from 'common/ContentNav';
import { WorkMetaTags } from 'common/MetaTags';

import { device } from 'consts/device';

const WorkHeader = styled.div``;

const NameAndImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10%;
  transition: 0.2s;

  & > h1 {
    font-weight: 100;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 2.5em;
  }

  @media ${device.tablet} {
    margin: 10% auto 0 15%;
    & > h1 {
      font-size: 4em;
    }
  }
  @media ${device.laptop} {
    & > h1 {
      font-size: 4.5em;
    }
  }
`;

const Position = styled.p`
  color: var(--gray);
  width: 80%;
  margin-top: 15px;
  font-size: 1.2em;
  letter-spacing: 1px;
  line-height: 1.5;

  @media ${device.tablet} {
    margin: 0 auto 10% 15%;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Image = styled(GatsbyImage)`
  height: 40px;
  margin-left: 10px;
  display: inline-block;
`;

export const pageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      fileAbsolutePath
      body
      frontmatter {
        title
        slug
        year
        position
        logo {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
function WorkTemplate({ data: { mdx: work }, scope, pageContext }) {
  if (!work) {
    return <p>No Work Found? This should be a 404</p>;
  }

  return (
    <>
      <WorkMetaTags work={work} />
      <WorkHeader>
        <NameAndImageWrapper>
          <Heading>{work.frontmatter.title}</Heading>
          <Image
            image={work.frontmatter.logo.childImageSharp.gatsbyImageData}
            alt={`${work.frontmatter.title}-logo`}
            imgStyle={{ objectFit: 'contain' }}
          />
        </NameAndImageWrapper>
        <Position>
          {work.frontmatter.position} / {work.frontmatter.year}
        </Position>
      </WorkHeader>
      <Content>
        <MDXRenderer scope={scope}>{work.body}</MDXRenderer>
        <ContentNav
          pathPrefix={pageContext.pathPrefix}
          prev={pageContext.prev}
          next={pageContext.next}
        />
      </Content>
    </>
  );
}

export default WorkTemplate;
