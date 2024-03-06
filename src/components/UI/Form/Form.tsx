import React, { FormEventHandler, ReactNode, useEffect } from 'react';
import { StyledFormWrapper, StyledForm } from './StyledForm';
import { TResponse, EResponseStatuses } from './types';
import { addNotification } from '../../../services/reducers/notificationSlice';
import { useAppDispatch } from '../../../services/hooks/store';
import { ENotificationType } from '../../../services/types/notification';

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

  const addNotificationToContext = (type: ENotificationType, message: string) => {
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
          addNotificationToContext(ENotificationType.success, textMessage);
          break;
        case EResponseStatuses.error:
          addNotificationToContext(ENotificationType.error, textMessage);
          break;
        default:
          addNotificationToContext(ENotificationType.info, textMessage);
          break;
      }
    }
    if (response?.status === EResponseStatuses.error && response?.errors) {
      Object.values(response.errors).forEach((error) => {
        const textMessage = error?.message as string;
        addNotificationToContext(ENotificationType.error, textMessage);
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