import React, { FormEventHandler, ReactNode, useEffect } from 'react';
import { addNotification } from 'store/slices/notificationSlice';
import { useAppDispatch } from 'hooks/store';
import { ENotificationType } from 'types/notification';
import { TResponse, EResponseStatuses } from './types';
import { StyledFormWrapper, StyledForm } from './StyledForm';

export default function Form({
  children,
  onSubmit,
  response,
  isLoading = false
}: {
  children: ReactNode,
  onSubmit: FormEventHandler,
  response: TResponse,
  isLoading?: boolean
}) {
  const dispatch = useAppDispatch();

  const diptachNotification = (type: ENotificationType, message: string) => {
    dispatch({
      type: addNotification.type,
      payload: {
        type,
        message
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }

    const {
      status,
      message
    } = response;
    const textMessage = message as string;
    if (status === EResponseStatuses.success) {
      diptachNotification(ENotificationType.success, textMessage);
      return;
    }
    if (status === EResponseStatuses.error && response.errors) {
      Object.values(response.errors).forEach((error) => {
        diptachNotification(ENotificationType.error, error.message as string);
      })
      return;
    }
    diptachNotification(ENotificationType.error, textMessage);
  }, [response?.status, response?.message]);

  return (
    <StyledFormWrapper>
      <StyledForm data-testid='form' onSubmit={onSubmit} $isLoading={isLoading}>
        { children }
      </StyledForm>
    </StyledFormWrapper>
  );
}