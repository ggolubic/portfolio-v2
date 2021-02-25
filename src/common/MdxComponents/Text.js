import styled from 'styled-components';

const p = styled.p`
  line-height: 2;
  font-size: 1.5em;
  font-family: sans-serif;
  text-align: justify;
  margin-bottom: 30px;
  color: var(--gray);
  @media (max-width: 450px) {
    font-size: 1.2em;
    line-height: 1.7;
  }
`;

export default p;
