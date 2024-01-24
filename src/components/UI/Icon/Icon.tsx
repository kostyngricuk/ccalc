import React from "react";
import { StyledIcon } from "./StyledIcon";

export interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  Sprite: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function Icon(props: IIcon) {
  const {
    Sprite
  } = props;
  return (
    <StyledIcon { ...props } className="Icon">
      <Sprite />
    </StyledIcon>
  );
}
