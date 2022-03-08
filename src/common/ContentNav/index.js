import React from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Fade from 'react-reveal/Fade';

const StyledContentNav = styled.div`
  display: flex;
  margin-top: 50px;
  overflow: hidden;
  #next {
    margin-left: auto;
  }

  a {
    display: flex;
    flex-direction: column;
    div {
      border: 1px solid var(--gray);
      border-radius: 3px;
    }
    strong,
    p {
      font-size: 1.5em;
      @media (max-width: 450px) {
        font-size: 1em;
      }
    }
    strong {
      display: inline-block;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid var(--gray);
      padding: 5px 50px;
      @media (max-width: 450px) {
        padding: 5px 20px;
      }
    }

    p {
      padding: 20px 50px;
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
        <AniLink
          paintDrip
          hex="#fefaf6"
          duration={0.8}
          to={`${pathPrefix}${prev.node.fields.slug}`}
        >
          <Fade left={true} duration={1000}>
            <div>
              <strong>← Prev</strong>
              <p>{prev.node.frontmatter.title}</p>
            </div>
          </Fade>
        </AniLink>
      )}
      {next && (
        <AniLink
          id="next"
          paintDrip
          hex="#fefaf6"
          duration={0.8}
          to={`${pathPrefix}${next.node.fields.slug}`}
        >
          <Fade right={true} duration={1000}>
            <div>
              <strong>Next →</strong>
              <p> {next.node.frontmatter.title}</p>
            </div>
          </Fade>
        </AniLink>
      )}
    </StyledContentNav>
  );
};

export default ContentNav;
