import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import H from 'common/MdxComponents/Headings';
// import ContentNav from 'common/ContentNav';
import { WorkMetaTags } from 'common/MetaTags';

const WorkHeader = styled.div`
  & > h1 {
    margin: 10% auto 0 15%;
    font-weight: 100;
  }
  & > p {
    margin: 0 auto 10% 15%;
  }
`;

const Position = styled.p`
  color: var(--gray);
  font-size: 1.5em;
  letter-spacing: 1px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
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
      excerpt
      fileAbsolutePath
      body
      frontmatter {
        title
        slug
        year
        position
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
        <H>{work.frontmatter.title}</H>
        <Position>
          {work.frontmatter.position} / {work.frontmatter.year}
        </Position>
      </WorkHeader>
      <Content>
        <MDXRenderer scope={scope}>{work.body}</MDXRenderer>
      </Content>
      {/* <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      /> */}
    </>
  );
}

export default WorkTemplate;
