import { FieldErrors, FieldValues } from "react-hook-form";

export enum TResponseStatuses {
  success,
  error
}

export interface IResponseSuccess {
  status: TResponseStatuses.success,
  message: string
}

export interface IResponseError {
  status: TResponseStatuses.error,
  message?: string,
  errors?: FieldErrors<FieldValues>
}

export type TResponse = IResponseSuccess | IResponseError | null;