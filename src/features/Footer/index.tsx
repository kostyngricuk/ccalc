import React from 'react';
import Container from 'components/Container'
import Copyright from 'features/Copyright'

import StyledFooter from './StyledFooter';

export default function Footer() {
  return (
    <StyledFooter data-testid="footer">
      <Container>
        <Copyright />
      </Container>
    </StyledFooter>
  );
}
