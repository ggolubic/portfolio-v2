import { useContext } from 'react';

import { ToastState } from './ToastProvider';

const useToast = () => {
  const { showToast, setShowToast } = useContext(ToastState);

  const setSuccessToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 6000);
  };

  const deleteToast = () => {
    setShowToast(false);
  };

  return { shouldShowToast: showToast, setSuccessToast, deleteToast };
};

export default useToast;
