export enum EResStatuses {
  success,
  error
}

export interface IRes {
  isLoading: boolean,
  success: boolean,
  message: string
}