import React from 'react';
import styled from 'styled-components';

const headingSizes = {
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2.5,
  h5: 2,
  h6: 1.8,
  span: 3.2,
};

const HStyles = styled.h1`
  /* Default h1 */
  font-size: ${headingSizes.h1}rem;
  /* Default allow to change */
  font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
  /* Visually override if need different font size vs the semantic element */
  font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  @media (max-width: 450px) {
    font-size: 3rem;
  }
  position: relative;
`;

export default function H(props) {
  return <HStyles {...props}>{props.children}</HStyles>;
}
