import React from 'react';
import StyledLoader from './StyledLoader';

export default function Loader() {
  return (
    <StyledLoader>
      <span className="cup" />
      <span className="wave" />
    </StyledLoader>
  );
}
