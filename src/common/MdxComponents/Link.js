import styled from 'styled-components';

const Link = styled.a`
  color: var(--primary-color);
  text-decoration: underline;
  &::selection {
    color: var(--primary-color);
  }
`;

export default Link;
