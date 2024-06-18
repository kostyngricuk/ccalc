import styled from 'styled-components';
import Button from '@components/UI/Button'

export const StyledProductItem = styled.li`
  margin-bottom: 10px;
  background-color: var(--color-lightgray);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  padding: 30px 40px;
`;

export const StyledRemoveProductButton = styled(Button)`
  color: var(--color-red);
  background-color: transparent;
  text-decoration: underline;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  border: none;
  position: absolute;
  right: 15px;
  top: 10px;
  &:hover,
  &:focus {
    color: var(--color-red);
  }
`;

export default StyledProductItem;
