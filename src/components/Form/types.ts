import { FieldErrors, FieldValues, GlobalError } from 'react-hook-form';

export enum EResponseStatuses {
  success,
  error
}

export interface IResponseSuccess {
  status: EResponseStatuses.success,
  message?: string
}

export interface IResponseError {
  status: EResponseStatuses.error,
  message?: string,
  errors?: FieldErrors<FieldValues> | GlobalError[]
}

export type TResponse = IResponseSuccess | IResponseError | null;