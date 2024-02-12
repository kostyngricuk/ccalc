import React from 'react';
import StyledIcon from './StyledIcon';

interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  Sprite: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function Icon({
  width,
  height,
  color,
  Sprite,
}: IIcon) {
  return (
    <StyledIcon
      width={width}
      height={height}
      color={color}
      className="Icon"
    >
      <Sprite />
    </StyledIcon>
  );
}
Icon.defaultProps = {
  width: '24px',
  height: '24px',
  color: 'inherit',
};
