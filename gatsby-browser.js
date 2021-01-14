const theme = require('./src/styles/theme').default;
const ToastProvider = require('./src/common/Toast/ToastProvider').default;
const React = require('react');

exports.onInitialClientRender = () => {
  const root = document.documentElement;
  root.style.setProperty('--primary-color', randomColor());
};

const randomColor = () => {
  const rand = Math.round(Math.random() * 4);

  switch (rand) {
    case 1:
      return theme.colors.yellow;
    case 2:
      return theme.colors.pink;
    case 3:
      return theme.colors.blue;
    case 4:
      return theme.colors.turqoise;
    default:
      return theme.colors.turqoise;
  }
};

exports.wrapRootElement = ({ element }) => <ToastProvider>{element}</ToastProvider>;
