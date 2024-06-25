import React from 'react';
import StyledLoader from './StyledLoader';

export default function Loader() {
  return (
    <StyledLoader data-testid="spiner">
      <span className="cup" />
      <span className="wave" />
    </StyledLoader>
  );
}
