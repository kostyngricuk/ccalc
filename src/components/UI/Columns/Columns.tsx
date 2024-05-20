import React, { ReactNode } from 'react';
import StyledColumns from './StyledColumns';

export default function Columns({
  className = '',
  children,
}: {
  className?: string,
  children: ReactNode
}) {
  return (
    <StyledColumns className= { className }>
      { children }
    </StyledColumns>
  );
}

Columns.defaultProps = {
  className: '',
}