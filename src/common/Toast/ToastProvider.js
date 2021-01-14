import React, { useState } from 'react';

export const ToastState = React.createContext({});

const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState(false);

  return <ToastState.Provider value={{ showToast, setShowToast }}>{children}</ToastState.Provider>;
};

export default ToastProvider;
