import React from 'react';
import { Helmet } from 'react-helmet';
import { pathJoin } from '../../utils/Path';

function getBaseURL() {
  const url = process.env.GATSBY_URL;
  if (!url || url === 'undefined') {
    return `http://localhost:8888`;
  }
  return url;
}

const baseURL = getBaseURL();

export const WorkMetaTags = ({ work }) => {
  //   const canonical = pathJoin('https://ggolubic.com', work.frontmatter.slug);
  const url = pathJoin(baseURL, work.frontmatter.slug);
  //   const thumbnailData = {
  //     title: work.frontmatter.title,
  //     url,
  //     thumbnail: work.frontmatter.image?.publicURL,
  //   };
  //   const thumbnailQuery = new URLSearchParams(
  //     Object.fromEntries(Object.entries(thumbnailData).filter(([key, val]) => val !== undefined)),
  //   ).toString();

  //   const ogImage = `${baseURL}/.netlify/functions/ogimage?${thumbnailQuery}`;
  return (
    <Helmet>
      {/* <link rel="canonical" href={canonical} /> */}
      <meta name="generator" content="Gabrijel Golubic on Gatsby!" />
      <meta property="og:type" content="blog" />
      <meta property="og:title" content={work.frontmatter.title} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:description" content={work.excerpt} /> */}
      <meta property="og:site_name" content="Gabrijel Golubic" />
      {/* <meta property="og:image" content={ogImage} /> */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_us" />
      <title>{work.frontmatter.title} - Gabrijel Golubic</title>
    </Helmet>
  );
};
