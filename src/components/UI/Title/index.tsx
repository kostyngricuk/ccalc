import React, { ReactNode } from 'react';
import { EnumHorizontalPosition, TypeTitleVariant } from '@services/types/global';
import StyledTitle from './StyledTitle';

export default function Title({
  children,
  className,
  variant,
  position,
}: {
  children: ReactNode;
  className?: string;
  variant?: TypeTitleVariant;
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
  variant: 'h1',
  position: EnumHorizontalPosition.left,
};