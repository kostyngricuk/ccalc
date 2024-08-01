import styled from 'styled-components';
import { StyledDropdown } from 'components/Dropdown/StyledDropdown';

export const StyledNavSub = styled(StyledDropdown)`
  @media ${(props) => props.theme.device.mobile} {
    position: relative;
    top: 0;
    left: 0;
    .DropdownContent {
        transform: none;
        position: relative;
        top: 0;
        left: 0;
        box-shadow: none;
        padding: 15px 0;
        background: rgba($colorPrimary, .15);
        text-align: center;
    }
  }
`;

export const StyledNavSubWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;
