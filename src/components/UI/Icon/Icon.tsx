import React from "react";
import styled from "styled-components";

interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  Sprite: React.FC<React.SVGProps<SVGSVGElement>>;
};

const StyledIconWrapper = styled.span<IIcon>`
  display: inline-block;
  height: ${props => (props.height || "24px")};
  width: ${props => (props.width || "24px")};
  color: ${props => (props.color || "inherit")};

  & svg {
    width: 100%;
    height: 100%;
  }
`

export default function Icon(props: IIcon) {
  const {
    Sprite
  } = props;
  return (
    <StyledIconWrapper { ...props } className="Icon">
      <Sprite />
    </StyledIconWrapper>
  );
}
