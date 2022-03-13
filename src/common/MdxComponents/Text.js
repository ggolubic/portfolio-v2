import styled from 'styled-components';

import { device } from 'consts/device';

const p = styled.p`
  font-family: 'Rubik', sans-serif;
  line-height: 2;
  text-align: justify;
  margin-bottom: 30px;
  color: var(--gray);
  font-size: 1.2em;
  line-height: 1.7;

  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
`;

export default p;
