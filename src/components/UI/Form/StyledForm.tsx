import styled from 'styled-components';
import { TResponseStatuses } from './types';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledFormWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
`;

export const StyledFormResult = styled.p<{status?: TResponseStatuses}>`
  margin-top: 1rem;
  color: ${(props) => props.status === TResponseStatuses.success ? props.theme.color.primary : props.theme.color.error };
`;
