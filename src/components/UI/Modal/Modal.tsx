import React, { ReactNode } from 'react';
import StyledModal from './StyledModal';

export default function Modal({
  children
}: {
  children: ReactNode
}) {
  return (
    <StyledModal>
      { children }
    </StyledModal>
  )
}