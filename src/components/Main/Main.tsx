import React, { ReactNode } from 'react';

import Container from '../UI/Container/Container';
import StyledMain from './StyledMain';

export default function Main({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledMain>
      <Container>
        { children }
      </Container>
    </StyledMain>
  );
}
