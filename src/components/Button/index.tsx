import React, { MouseEventHandler, ReactNode } from 'react';

import StyledButton from './StyledButton';

export enum EnumButtonType {
  button = 'button',
  submit = 'submit'
};
export enum EnumButtonColor {
  black = 'black',
  primary = 'primary',
  secondry = 'secondry',
  third = 'third',
  fourth = 'fourth'
};

interface IButton {
  children: ReactNode;
  type?: EnumButtonType;
  className?: string;
  $isIcon?: boolean;
  $isOutline?: boolean;
  color?: EnumButtonColor;
  ariaLabel?: string;
  $isDisabled?: boolean;
  onClick?: MouseEventHandler;
}

export default function Button({
  children,
  type = EnumButtonType.button,
  className = '',
  $isIcon = false,
  $isOutline = false,
  color = EnumButtonColor.primary,
  ariaLabel = '',
  $isDisabled = false,
  onClick,
}: IButton) {
  return (
    <StyledButton
      color={color}
      $isIcon={$isIcon}
      $isOutline={$isOutline}
      $isDisabled={$isDisabled}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
