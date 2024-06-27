/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import SVG from 'react-inlinesvg';
import StyledIcon from './StyledIcon';

interface IIcon {
  width?: string;
  height?: string;
  color?: string;
  sprite: string;
}

export default function Icon({
  width,
  height,
  color,
  sprite,
}: IIcon) {
  return (
    <StyledIcon
      width={width}
      height={height}
      color={color}
      className="Icon"
    >
      <SVG src={sprite} />
    </StyledIcon>
  );
}
Icon.defaultProps = {
  width: '24px',
  height: '24px',
  color: 'inherit',
};
