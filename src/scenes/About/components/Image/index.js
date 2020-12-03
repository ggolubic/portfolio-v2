import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
  display: flex;
  max-width: 500px;
  height: 400px;
  justify-content: center;
`;

export default function Image() {
  const data = useStaticQuery(graphql`
    query ProfileImageQuery {
      profileImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, sizes: "(max-width: 500px) calc(100vw - 40px), 500px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Wrapper>
      <Img
        fluid={data.profileImage.childImageSharp.fluid}
        alt="Its me"
        style={{ margin: '1rem', width: '100%', maxHeight: 'calc(50vh - 4rem)' }}
        imgStyle={{ objectFit: 'contain' }}
      />
    </Wrapper>
  );
}
