import { createContext } from "react";
import ENotificationType from "../components/UI/Notifications/types";

export interface INotification {
  id: number,
  type: ENotificationType,
  message: string
}

export type TNotification = INotification[];

interface INotificationContext {
  notifications: TNotification,
  addNotification: any,
  removeNotification: any
}

const NotificationContext = createContext<INotificationContext>({
  notifications: [],
  addNotification: () => { },
  removeNotification: () => { },
});
export default NotificationContext;