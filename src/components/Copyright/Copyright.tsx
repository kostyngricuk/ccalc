import React from 'react';
import StyledCopyright from './StyledCopyright';

export default function Copyright() {
  return (
    <StyledCopyright>
      Kanstantsin Hrytsuk ©
      {
        new Date().getFullYear()
      }
    </StyledCopyright>
  );
}
