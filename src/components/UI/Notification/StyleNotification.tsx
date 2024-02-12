import styled from "styled-components";
import ENotificationType from "./types";

const StyleNotification = styled.div<{$type: ENotificationType}>`
  box-shadow: 0 1px 16px 0 rgba(0, 0, 0, 0.1);
  background: var(--color-white);
  position: fixed;
  bottom: 80px;
  padding: 12px;
  display: flex;
  align-items: center;
  color: ${props => props.$type === ENotificationType.success ? props.theme.color.primary : props.theme.color.secondary};
  margin: 0;
  border: none;
  max-width: 600px;
`

export default StyleNotification;