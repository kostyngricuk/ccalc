import React, { ReactNode } from 'react';
import { StyledFieldRow, StyledFormActions, StyledFormField } from './StyledFormField';

export enum EnumFormFieldType {
  wrapper,
  row,
  actions,
}

export default function FormField({
  children,
  type = EnumFormFieldType.wrapper
}: {
  children: ReactNode,
  type?: EnumFormFieldType
}) {
  switch (type) {
    case EnumFormFieldType.row:
      return <StyledFieldRow>{ children }</StyledFieldRow>;
    case EnumFormFieldType.actions:
      return <StyledFormActions>{ children }</StyledFormActions>;
    default:
      return <StyledFormField>{ children }</StyledFormField>;
  }
}