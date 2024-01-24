import styled from "styled-components";
import { IIcon } from "./Icon";

export const StyledIcon = styled.span<IIcon>`
  display: inline-block;
  height: ${props => (props.height || "24px")};
  width: ${props => (props.width || "24px")};
  color: ${props => (props.color || "inherit")};

  & svg {
    width: 100%;
    height: 100%;
  }
`