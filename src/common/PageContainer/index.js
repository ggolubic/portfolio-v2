import styled from 'styled-components';

export const PageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: ${({ align }) => align || 'center'};
  flex-direction: ${({ direction }) => direction || 'row'};
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
