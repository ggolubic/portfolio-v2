import styled, { keyframes } from 'styled-components';

export const inAndOut = keyframes`{
    0%{
    transform: translateX(100%);
    }
    20%{
        transform: translateX(0);
    }
    80%{
        transform: translateX(0);
    }
    100%{
    transform: translateX(120%);
    }
}`;

export const ToastContainer = styled.div`
  position: fixed;
  width: 315px;
  z-index: 11;
  bottom: 20px;
  color: #fff;
  right: 20px;
  transition: transform 0.6s ease-in-out;
  animation: ${inAndOut} 6s;
  animation-fill-mode: forwards;
  button {
    position: absolute;
    right: 20px;
    top: 20px;
    outline: none;
    border: none;
    color: white;
    font-size: 20px;
    background: 0;
    cursor: pointer;
  }
`;

export const InnerWrapper = styled.div`
  position: relative;
  transition: 0.3s ease;
  background-color: #5cb85c;
  padding: 30px;
  width: 250px;
  max-height: 100px;
  border-radius: 3px;
  box-shadow: 0 0 10px #999;
  color: #000;
  opacity: 0.9;

  &:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
export const ToastTitle = styled.p`
  font-weight: 700;
  font-size: 1.4em;
  margin-bottom: 6px;
`;
export const ToastMessage = styled.p`
  margin: 0;
  font-size: 1.1em;
`;
