import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: var(--color-white);
  box-shadow: 0px 1px 2px 0px var(--color-disabled);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  & > * {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
  }
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 -0.5em;
  width: 100%;
  & > * {
      margin: 0 0.5em;
  }
  @media ${(props) => props.theme.device.mobile} {
      flex-direction: row-reverse;
      justify-content: flex-start;
  }
`;
