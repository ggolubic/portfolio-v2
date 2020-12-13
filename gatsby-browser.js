const { default: theme } = require('./src/styles/theme');

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
