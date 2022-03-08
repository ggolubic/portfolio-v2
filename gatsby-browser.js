const React = import('react');
const theme = import('./src/styles/theme');
const ToastProvider = import('./src/common/Toast/ToastProvider');

export const onInitialClientRender = () => {
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

export const wrapRootElement = ({ element }) => <ToastProvider>{element}</ToastProvider>;
