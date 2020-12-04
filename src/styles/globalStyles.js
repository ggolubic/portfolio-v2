import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    margin:0;
    font-size:13px;
}

a {
    text-decoration:none;
    color:inherit;
}

p {
    margin:0;
    color:inherit;
};

* {
  margin: 0;
  padding: 0;
}`;

export default GlobalStyles;
