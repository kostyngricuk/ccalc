import styled, { css } from 'styled-components';
import { resetButton } from 'styles/mixins';

export const StyledDropdown = styled.div`
  position: relative;
  text-align: center;
`;

export const StyledDropdownContent = styled.div`
  position: absolute;
  margin-top: 12px;
  left: -20px;
  min-width: 194px;
  width: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transition: .2s;
  display: none;
  left: 50%;
  transform: translateX(-50%);
  .NavItem + .NavItem {
    margin: 12px 0 0;
  }
`;

export const StyledDropdownTrigger = styled.div<{
  $isActive:boolean,
  $showArrow?: boolean
}>`
  ${resetButton}
  display: inline-flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  ${(props) => props.$isActive && css`
    & ~ .DropdownContent {
      opacity: 1;
      visibility: visible;
      display: block;
    }
  `}
  ${(props) => props.$showArrow && css`
    .Icon {
      margin-left: 6px;
    }
  `}
`;
