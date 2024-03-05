import React, { FormEventHandler, ReactNode, useContext, useEffect } from 'react';
import { StyledFormWrapper, StyledForm } from './StyledForm';
import { TResponse, EResponseStatuses } from './types';
import NotificationContext from '../../../services/notificationContext';
import ENotificationType from '../Notifications/types';

export default function Form({
  children,
  onSubmit,
  response,
}: {
  children: ReactNode,
  onSubmit: FormEventHandler,
  response: TResponse
}) {
  const notificationContext = useContext(NotificationContext);

  const addNotificationToContext = (type: ENotificationType, message: string) => {
    notificationContext.addNotification({
      id: notificationContext.notifications.length,
      type,
      message
    })
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
      <StyledForm onSubmit={onSubmit}>
        { children }
      </StyledForm>
    </StyledFormWrapper>
  );
}
