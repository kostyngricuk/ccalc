import React, { ReactNode } from 'react';
import { EnumHorizontalPosition } from '@services/types/global';
import StyledText from './StyledText';

export default function Text({
  children,
  className,
  position,
}: {
  children: ReactNode;
  className?: string;
  position?: EnumHorizontalPosition;
}) {
  return (
    <StyledText className={className} position={position}>
      {children}
    </StyledText>
  );
}

Text.defaultProps = {
  className: '',
  position: EnumHorizontalPosition.left,
};
