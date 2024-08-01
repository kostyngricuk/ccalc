import React, { ReactNode } from 'react';

import Container from 'components/Container';
import StyledSection from './StyledSection';

export default function Section({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledSection>
      <Container>
        { children }
      </Container>
    </StyledSection>
  );
}
