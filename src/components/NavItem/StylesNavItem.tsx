import styled from 'styled-components';

const StyledNavItem = styled.li`
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    display: inline-block;
    font-size: 20px;
    position: relative;
    z-index: 2;
    &:hover,
    &:focus {
      color: var(--color-primary);
      & + .Dropdown .Dropdown__wrapper {
          opacity: 1;
          visibility: visible;
      }
    }
    &.active {
      color: var(--color-primary);
    }
    @media ${(props) => props.theme.device.tablet} {
      font-size: 32px;
    }
  }
  & + & {
      margin-left: 3rem;
      @media ${(props) => props.theme.device.tablet} {
          margin: 32px 0 0;
          .DropdownTrigger .Icon {
              width: 28px;
              height: 28px;
          }
      }
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 100%;
    max-width: 300px;
  }
`;
export default StyledNavItem;
