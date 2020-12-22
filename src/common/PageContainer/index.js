import styled from 'styled-components';

import { device } from 'consts/device';

export const PageContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || 'row'};
  min-height: 55vh;
  padding-top: 10%;
  max-width: 1600px;
  margin: 0 auto;

  @media ${device.tablet} {
    min-height: 100vh;
    align-items: ${({ align }) => align || 'center'};
    padding-top: 0px;
  }
`;
