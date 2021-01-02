import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Image } from 'gatsby-image';
import H from 'common/MdxComponents/Headings';
// import ContentNav from 'common/ContentNav';
import { WorkMetaTags } from 'common/MetaTags';

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        image
      }
      body
    }
  }
`;
function WorkTemplate({ data: { mdx: work }, scope, pageContext }) {
  if (!work) {
    return <p>No Work Found? This should be a 404</p>;
  }

  return (
    <>
      <Image image={work.frontmatter.image} alt={work.frontmatter.title} />
      <WorkMetaTags work={work} />
      <H>{work.frontmatter.title}</H>
      <MDXRenderer scope={scope}>{post.body}</MDXRenderer>
      {/* <ContentNav
        pathPrefix={pageContext.pathPrefix}
        prev={pageContext.prev}
        next={pageContext.next}
      /> */}
    </>
  );
}

export default WorkTemplate;
