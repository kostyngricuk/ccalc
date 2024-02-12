import { FieldErrors, FieldValues } from "react-hook-form";

export enum TResponseStatuses {
  success,
  error
}

export interface IResponseSuccess {
  status: TResponseStatuses.success,
  message: string
}

export interface IResponseErrors {
  status: TResponseStatuses.error,
  errors: FieldErrors<FieldValues>
}

export type TResponse = IResponseSuccess | IResponseErrors | null;