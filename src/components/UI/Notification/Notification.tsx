import React, { ReactNode } from 'react';
import StyleNotification from './StyleNotification';
import Icon from '../Icon/Icon';
import { CheckSVG, InfoSVG } from '../../../icons';
import ENotificationType from './types';

export default function Notification({
  children,
  type
}: {
  children: ReactNode,
  type: ENotificationType
}) {

  return (
    <StyleNotification $type={type}>
      <Icon width='30px' height='30px' Sprite={type === ENotificationType.info ? InfoSVG : CheckSVG} />
      { children }
    </StyleNotification>
  );
}