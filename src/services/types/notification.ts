import ENotificationType from "../../components/UI/Notifications/types";

export interface INotification {
  id?: number,
  type: ENotificationType,
  message: string
}

export interface INotificationState {
  notifications: INotification[]
}