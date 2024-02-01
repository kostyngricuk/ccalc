import React, { MouseEventHandler, ReactNode } from 'react';

import StyledButton from './StyledButton';

interface IButton {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  $isIcon?: boolean;
  $isOutline?: boolean;
  color?: 'primary' | 'secondry' | 'red' | 'black';
  ariaLabel?: string;
  $isDisabled?: boolean;
  onClick?: MouseEventHandler;
}

export default function Button({
  children,
  type = 'button',
  className = '',
  $isIcon = false,
  $isOutline = false,
  color = 'primary',
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
Button.defaultProps = {
  type: 'button',
  className: '',
  $isIcon: false,
  $isOutline: false,
  color: 'primary',
  ariaLabel: '',
  $isDisabled: false,
  onClick: undefined,
};
