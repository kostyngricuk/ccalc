import styled from 'styled-components';

export const StyledFormField = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  @media ${(props) => props.theme.device.mobile} {
    display: initial;
    & > * {
      width: 100%;
    }
  }
`;

export const StyledFieldRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledFormActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  & > * {
    width: 100%;
  }
`;
