import React from 'react';
import Container from '@components/UI/Container'
import Copyright from '@components/Copyright'

import StyledFooter from './StyledFooter';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Copyright />
      </Container>
    </StyledFooter>
  );
}