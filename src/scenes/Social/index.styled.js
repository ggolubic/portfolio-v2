import styled from 'styled-components';
import { device } from 'src/consts/device.js';

export const SocialContainer = styled.div`
  position: sticky;
  bottom: 2.5%;
  display: flex;
  align-items: center;
  transition: 0.2s;
  justify-content: space-evenly;

  @media ${device.tablet} {
    flex-direction: column;
    bottom: 10%;
    /* margin: 0 90%; */
    margin: 0 95%;
  }
`;

export const IconContainer = styled.a`
  margin-bottom: 30px;
  transition: 0.2s;

  svg {
    font-size: 2em;
  }
  @media ${device.laptop} {
    svg {
      font-size: 3em;
    }
  }

  &:hover {
    transform: scale(1.2);
    color: ${({ theme, type }) => theme.colors[type]};
  }
`;