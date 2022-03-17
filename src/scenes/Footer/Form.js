import React from 'react';
import { useLocation } from '@reach/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { animateScroll } from 'react-scroll';

import useToast from 'common/Toast/useToast';
import { device } from 'consts/device';

const FormWrapper = styled.form`
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  @media ${device.tablet} {
    width: 60%;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  box-shadow: ${({ theme }) => `${theme.colors.borderColor} 0px 0px 0px 1px inset`};
  border-radius: 3px;
  outline: none;
  transition: 0.15s;
  &:focus {
    box-shadow: none;
    box-shadow: var(--primary-color) 0px 0px 0px 2px inset;
    transform: translateY(-2px);
  }
`;

const Label = styled.label`
  color: var(--primary-color);
  font-size: 1.2em;
  margin-top: 20px;
  letter-spacing: 1px;
  font-weight: 700;
`;

const StyledTextArea = styled.textarea`
  padding: 5px;
  border: none;
  border-radius: 3px;
  box-shadow: ${({ theme }) => `${theme.colors.borderColor} 0px 0px 0px 1px inset`};
  outline: none;
  transition: 0.15s;
  &:focus {
    box-shadow: none;
    box-shadow: var(--primary-color) 0px 0px 0px 2px inset;
    transform: translateY(-2px);
  }
`;

const StyledButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  margin: 20px 0;
  transition: 0.35s;
  background-color: var(--primary-color);
  color: white;
  letter-spacing: 1px;
  &:hover {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.8);
  }
`;

const ErrorText = styled.span`
  color: red;
  margin-top: 5px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Form = () => {
  const location = useLocation();
  const { setSuccessToast } = useToast();
  const { register, errors, reset, handleSubmit } = useForm({ mode: 'onSubmit' });

  const pushToNetlify = (data) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact', ...data }).toString(),
    })
      .then(() => {
        reset();
        animateScroll.scrollToTop();
        setSuccessToast(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
      action={location.pathname}
      onSubmit={() => handleSubmit(pushToNetlify)}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Label htmlFor="name">NAME</Label>
      <StyledInput
        id="name"
        {...register('name', {
          required: { value: true, message: 'Your name is required.' },
          min: { value: 3, message: 'Has to be at least 3 characters.' },
        })}
        aria-label="name"
        aria-required="true"
      />
      {errors?.name && <ErrorText>{errors.name.message}</ErrorText>}

      <Label htmlFor="email">EMAIL</Label>
      <StyledInput
        id="email"
        {...register('email', { required: 'Your email is required' })}
        aria-label="email"
        aria-required="true"
        type="email"
      />
      {errors?.email && <ErrorText>{errors.email.message}</ErrorText>}

      <Label htmlFor="message">MESSAGE</Label>
      <StyledTextArea
        id="message"
        {...register('message', { required: true })}
        aria-label="message"
        aria-required="true"
        rows="5"
      />
      {errors?.message && <ErrorText>This field is required</ErrorText>}
      <div data-netlify-recaptcha="true"></div>
      <StyledButton type="submit">SEND</StyledButton>
    </form>
  );
};

export default Form;
