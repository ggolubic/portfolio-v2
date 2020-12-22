import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color:'#00cdac',
}

body {
    margin:0;
    font-size:13px;
    font-family:${({ theme }) => theme.fonts.primaryFontFamily2};
    font-display: swap;
    background-color: ${({ theme }) => theme.colors.background};
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
