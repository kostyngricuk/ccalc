import React, { useEffect } from 'react';

import { CheckSVG, InfoSVG } from 'icons/index';
import { ENotificationType, INotification } from 'types/notification';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { selectNotificationItems } from 'hooks/selectors';
import { removeNotification } from 'store/slices/notificationSlice';
import Icon from 'components/Icon'
import { StyleNotifications, StyleNotification } from './StyleNotifications';

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
      <Icon width='30px' height='30px' sprite={getSpriteByType(type)} />
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