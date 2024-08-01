import styled, { css } from 'styled-components';

export const StyledForm = styled.form<{
  $isLoading?: boolean
}>`
  display: flex;
  flex-direction: column;
  ${(props) => props.$isLoading && css`
    opacity: .65;
    pointer-events: none;
  `}
`;

export const StyledFormWrapper = styled.div`
  max-width: 380px;
  margin: 0 auto;
  & + * {
    margin-top: 20px;
  }
`;
