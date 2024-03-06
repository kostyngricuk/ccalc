export enum ENotificationType {
  success,
  error,
  info
}

export interface INotification {
  id?: number,
  type: ENotificationType,
  message: string
}

export interface INotificationState {
  items: INotification[]
}