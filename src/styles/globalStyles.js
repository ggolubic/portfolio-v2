import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color:#fefaf6;
    --black:#101419;
    --gray:#656270;
}

body {
    margin:0;
    font-size:13px;
    font-family:${({ theme }) => theme.fonts.primaryFontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    scroll-behavior: smooth;
}

a {
    text-decoration:none;
    color:inherit;
}

p {
    margin:0;
    color:inherit;
};

::selection{
        background-color:#F5B700;
        color:var(--black);
}

* {
  margin: 0;
  padding: 0;
}`;

export default GlobalStyles;
