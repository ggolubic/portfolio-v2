import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Fade from 'react-reveal/Fade';

const StyledContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  overflow: hidden;

  a {
    display: flex;
    flex-direction: column;

    strong,
    p {
      border: 1px solid var(--gray);
      font-size: 1.5em;
      @media (max-width: 450px) {
        font-size: 1em;
      }
    }
    strong {
      border-radius: 3px 3px 0 0;
      padding: 5px 50px;
      @media (max-width: 450px) {
        padding: 5px 20px;
      }
    }

    p {
      padding: 20px 50px;
      border-top: none;
      border-radius: 0 0 3px 3px;
      @media (max-width: 450px) {
        padding: 10px 20px;
      }
    }
  }
`;

const ContentNav = ({ prev, next, pathPrefix }) => {
  return (
    <StyledContentNav>
      {prev && (
        <Fade left={true} duration={1000} delay={300}>
          <AniLink
            paintDrip
            hex="#fefaf6"
            duration={0.8}
            to={`${pathPrefix}${prev.node.fields.slug}`}
          >
            <strong>← Prev</strong>
            <p>{prev.node.frontmatter.title}</p>
          </AniLink>
        </Fade>
      )}
      {next && (
        <Fade right={true} duration={1000} delay={300}>
          <AniLink
            paintDrip
            hex="#fefaf6"
            duration={0.8}
            to={`${pathPrefix}${next.node.fields.slug}`}
          >
            <strong>Next →</strong>
            <p> {next.node.frontmatter.title}</p>
          </AniLink>
        </Fade>
      )}
    </StyledContentNav>
  );
};

export default ContentNav;
