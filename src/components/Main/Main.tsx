import React, { ReactNode } from 'react';

import Container from '../UI/Container/Container';
import StyledMain from './StyledMain';
import Notification from '../UI/Notification/Notification';
import ENotificationType from '../UI/Notification/types';

export default function Main({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledMain>
      <Container>
        { children }
        <Notification type={ENotificationType.success}>
          Settings changed successfully
        </Notification>
      </Container>
    </StyledMain>
  );
}
