import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: var(--color-white);
  box-shadow: 0px -1px 2px 0px var(--color-disabled);
  & > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
  }
`;
export default StyledFooter;
