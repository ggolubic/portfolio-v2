import styled from 'styled-components';

import { device } from 'consts/device';

export const PageContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding-top: 10%;
  margin: 0 auto;
  max-width: 1600px;

  @media ${device.tablet} {
    min-height: calc(100vh - 65px);
    align-items: ${({ align }) => align || 'center'};
    padding-top: 0px;
  }
`;
