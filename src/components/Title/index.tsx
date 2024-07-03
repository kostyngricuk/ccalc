import React, { ReactNode } from 'react';
import { EnumHorizontalPosition, TypeTitleVariant } from 'types/global';
import StyledTitle from './StyledTitle';

export default function Title({
  children,
  variant = 'h1',
  position = EnumHorizontalPosition.left,
}: {
  children: ReactNode;
  variant?: TypeTitleVariant;
  position?: EnumHorizontalPosition;
}) {
  return (
    <StyledTitle variant={variant} position={position}>
      {children}
    </StyledTitle>
  );
}
