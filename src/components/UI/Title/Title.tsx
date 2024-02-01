import React, { ReactNode } from 'react';
import StyledTitle from './StyledTitle';
import { EnumHorizontalPosition, EnumTitleVariant } from '../../../types/global';

export default function Title({
  children,
  className,
  variant,
  position,
}: {
  children: ReactNode;
  className?: string;
  variant?: EnumTitleVariant;
  position?: EnumHorizontalPosition;
}) {
  return (
    <StyledTitle className={className} variant={variant} position={position}>
      {children}
    </StyledTitle>
  );
}

Title.defaultProps = {
  className: '',
  variant: EnumTitleVariant.h1,
  position: EnumHorizontalPosition.left,
};
