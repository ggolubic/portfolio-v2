import styled from 'styled-components';

export const SocialContainer = styled.div`
  position: absolute;
  bottom: 10%;
  right: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.a`
  margin-bottom: 30px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
    color: ${({ theme, type }) => theme.colors[type]};
  }
`;
