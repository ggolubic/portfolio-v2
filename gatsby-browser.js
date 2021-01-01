const React = require('react');
const Layout = require('./src/common/Layout').default;
const theme = require('./src/styles/theme').default;

exports.onInitialClientRender = () => {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', randomColor());
};

const randomColor = () => {
  const rand = Math.round(Math.random() * 5);

  switch (rand) {
    case 1:
      return theme.colors.yellow;
    case 2:
      return theme.colors.pink;
    case 3:
      return theme.colors.blue;
    case 4:
      return theme.colors.turqoise;
    case 5:
      return theme.colors.black;
    default:
      return theme.colors.turqoise;
  }
};

exports.wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
