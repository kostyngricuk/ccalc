import styled from 'styled-components';
import { ENotificationType } from '@services/types/notification';

const getColorByType = (type?: ENotificationType) => {
  switch (type) {
    case ENotificationType.success:
      return 'var(--color-primary)';
    case ENotificationType.error:
      return 'var(--color-error)';
    default:
      return 'var(--color-secondary)';
  }
}

export const StyleNotifications = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 80px;
  left: 15px;
  max-width: 600px;
`;

export const StyleNotification = styled.div<{$type?: ENotificationType}>`
  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.1);
  background: var(--color-white);
  display: flex;
  align-items: center;
  color: ${props => getColorByType(props.$type)};
  margin: 0;
  border: none;
  max-width: 100%;
  padding: 12px;
  & + & {
    margin-top: 10px;
  }
`;