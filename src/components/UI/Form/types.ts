import { FieldErrors, FieldValues } from "react-hook-form";

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
  errors?: FieldErrors<FieldValues>
}

export type TResponse = IResponseSuccess | IResponseError | null;