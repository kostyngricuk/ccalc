import React, { useContext, useEffect } from 'react';
import { StyleNotifications, StyleNotification } from './StyleNotifications';
import Icon from '../Icon/Icon';
import { CheckSVG, InfoSVG } from '../../../icons';
import ENotificationType from './types';
import NotificationContext, { TNotification } from '../../../services/notificationContext';

const getSpriteByType = (type?: ENotificationType) => {
  if (type === ENotificationType.info) {
    return InfoSVG;
  }
  return CheckSVG;
}

export function Notification({
  id,
  type,
  message
}: {
  id: number,
  type: ENotificationType,
  message: string
}) {
  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    const removeItemTimeut = setTimeout(() => {
      notificationContext.removeNotification(id)
    }, 3000);
    return () => clearTimeout(removeItemTimeut);
  }, [])
  return (
    <StyleNotification $type={type}>
      <Icon width='30px' height='30px' Sprite={getSpriteByType(type)} />
      { message }
    </StyleNotification>
  )
}

export function Notifications({
  items
}: {
  items: TNotification,
}) {
  return (
    <StyleNotifications>
      {
        items?.map((item) => (
          <Notification key={item.id} id={item.id} type={item.type} message={item.message} />
        ))
      }
    </StyleNotifications>
  );
}