import styled from 'styled-components';

import { device } from 'consts/device';

export const Container = styled.div`
  width: 100%;
  margin: 0 15px;

  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 990px;
  }
  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;

export default Container;
