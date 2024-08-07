import React, { ReactNode } from 'react';

import StyledMain from './StyledMain';

export default function Main({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledMain data-testid='main'>
      { children }
    </StyledMain>
  );
}
