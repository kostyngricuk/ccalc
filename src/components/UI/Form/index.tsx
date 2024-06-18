import React, { FormEventHandler, ReactNode, useEffect } from 'react';
import { addNotification } from '@services/reducers/notificationSlice';
import { useAppDispatch } from '@services/hooks/store';
import { ENotificationType } from '@services/types/notification';
import { TResponse, EResponseStatuses } from './types';
import { StyledFormWrapper, StyledForm } from './StyledForm';

export default function Form({
  children,
  onSubmit,
  response,
  isLoading
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
    if (response?.message) {
      const textMessage = response?.message as string;
      switch (response?.status) {
        case EResponseStatuses.success:
          diptachNotification(ENotificationType.success, textMessage);
          break;
        case EResponseStatuses.error:
          diptachNotification(ENotificationType.error, textMessage);
          break;
        default:
          diptachNotification(ENotificationType.info, textMessage);
          break;
      }
    }
    if (response?.status === EResponseStatuses.error && response?.errors) {
      Object.values(response.errors).forEach((error) => {
        const textMessage = error?.message as string;
        diptachNotification(ENotificationType.error, textMessage);
      })
    }
  }, [response?.status, response?.message]);

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={onSubmit} $isLoading={isLoading}>
        { children }
      </StyledForm>
    </StyledFormWrapper>
  );
}

Form.defaultProps = {
  isLoading: false
}