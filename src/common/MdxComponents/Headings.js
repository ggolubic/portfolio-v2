import React from 'react';
import styled from 'styled-components';

import { device } from 'consts/device';

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
  position: relative;
  /* Default h1 */
  color: var(--black);
  letter-spacing: 2px;
  margin-top: 100px;
  margin-bottom: 15px;
  font-size: 2rem;

  @media ${device.tablet} {
    font-size: ${headingSizes.h1}rem;
    /* Default allow to change */
    font-size: ${({ as }) => as && `${headingSizes[as]}rem`};
    /* Visually override if need different font size vs the semantic element */
    font-size: ${({ looksLike }) => looksLike && `${headingSizes[looksLike]}rem`};
  }
`;

const Heading = (props) => {
  return <HStyles {...props}>{props.children}</HStyles>;
};

export default Heading;
