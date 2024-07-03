/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ReactSVG } from 'react-svg';
import StyledIcon from './StyledIcon';

interface IIcon {
  width?: string;
  height?: string;
  sprite: string;
}

export default function Icon({
  width = '24px',
  height = '24px',
  sprite,
}: IIcon) {
  return (
    <StyledIcon
      width={width}
      height={height}
      className="Icon"
      role='img'
    >
      <ReactSVG src={sprite} />
    </StyledIcon>
  );
}
