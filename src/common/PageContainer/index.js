import styled from 'styled-components';

export const PageContainer = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primaryFontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
`;
