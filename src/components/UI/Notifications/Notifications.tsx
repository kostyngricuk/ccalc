import React, { useEffect } from 'react';

import { StyleNotifications, StyleNotification } from './StyleNotifications';
import Icon from '../Icon/Icon';
import { CheckSVG, InfoSVG } from '../../../icons';
import { ENotificationType, INotification } from '../../../services/types/notification';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/store';
import { selectNotificationItems } from '../../../services/hooks/selectors';
import { removeNotification } from '../../../services/reducers/notificationSlice';

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
}: INotification) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const removeItemTimeut = setTimeout(() => {
      dispatch({
        type: removeNotification.type,
        payload: id
      });
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

export function Notifications() {
  const items = useAppSelector(selectNotificationItems);

  return (
    <StyleNotifications>
      {
        items?.map((item: INotification) => (
          <Notification key={item.id} id={item.id} type={item.type} message={item.message} />
        ))
      }
    </StyleNotifications>
  );
}