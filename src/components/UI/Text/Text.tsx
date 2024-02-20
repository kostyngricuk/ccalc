import React, { ReactNode } from 'react';
import StyledText from './StyledText';
import { EnumHorizontalPosition } from '../../../types/global';

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
