import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import useToast from './useToast';
import { ToastContainer, InnerWrapper, ToastTitle, ToastMessage } from './index.styled';

const Toast = () => {
  const { shouldShowToast, deleteToast } = useToast();

  return (
    <>
      {shouldShowToast && (
        <ToastContainer>
          <InnerWrapper>
            <button onClick={deleteToast}>
              <FaRegTimesCircle />
            </button>
            <div>
              <ToastTitle>Success</ToastTitle>
              <ToastMessage>Thanks for reaching out!</ToastMessage>
            </div>
          </InnerWrapper>
        </ToastContainer>
      )}
    </>
  );
};
export default Toast;
