import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import H from 'common/MdxComponents/Headings';
import ContentNav from 'common/ContentNav';
import { WorkMetaTags } from 'common/MetaTags';

import { device } from 'consts/device';

const WorkHeader = styled.div`
  & > h1 {
    margin-top: 10%;
    font-weight: 100;
    font-size: 3em;
  }
  & > p {
    width: 80%;
    font-size: 1.2em;
  }

  @media ${device.tablet} {
    & > h1 {
      margin: 10% auto 0 15%;
      font-size: 5em;
    }
    & > p {
      margin: 0 auto 10% 15%;
    }
  }
`;

const Position = styled.p`
  color: var(--gray);
  font-size: 1.5em;
  letter-spacing: 1px;
  line-height: 1.5;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Image = styled(Img)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: inline-block;
  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
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
            fluid {
              ...GatsbyImageSharpFluid
            }
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
        <H>
          {work.frontmatter.title}
          <Image
            fluid={work.frontmatter.logo.childImageSharp.fluid}
            alt={`${work.frontmatter.title}-logo`}
            imgStyle={{ objectFit: 'scale-down' }}
          />
        </H>
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
