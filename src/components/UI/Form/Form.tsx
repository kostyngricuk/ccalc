import React, { FormEventHandler, ReactNode } from 'react';
import { StyledFormWrapper, StyledFormResult, StyledForm } from './StyledForm';
import { TResponse, TResponseStatuses } from './types';

export default function Form({
  children,
  onSubmit,
  response,
}: {
  children: ReactNode,
  onSubmit: FormEventHandler,
  response: TResponse
}) {
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={onSubmit}>
        { children }
      </StyledForm>
      <StyledFormResult status={response?.status}>
        {
          response?.status === TResponseStatuses.success && response?.message
        }
        {
          response?.status === TResponseStatuses.error && Object.values(response.errors).map((error) => (
            <>
              <span>{ `${error?.message}` }</span>
              <br/>
            </>
          ))
        }
      </StyledFormResult>
    </StyledFormWrapper>
  );
}
