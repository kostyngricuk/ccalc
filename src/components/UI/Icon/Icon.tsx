import React from "react";
import styled from "styled-components";

type IconProps = {
  width?: string;
  height?: string;
  color?: string;
  Sprite: React.FC<React.SVGProps<SVGSVGElement>>;
};

const StyledIconWrapper = styled.span<IconProps>`
  display: inline-block;
  height: ${props => (props.height || "24px")};
  width: ${props => (props.width || "24px")};
  color: ${props => (props.color || "inherit")};

  & svg {
    width: 100%;
    height: 100%;
  }
`

export default function Icon(props: IconProps) {
  const {
    Sprite
  } = props;
  return (
    <StyledIconWrapper { ...props } className="Icon">
      <Sprite />
    </StyledIconWrapper>
  );
}
