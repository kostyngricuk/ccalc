import React, { ReactNode, useRef, useEffect } from 'react';
import StyledModal from './StyledModal';

export default function Modal({
  children,
  isActive,
  onClose
}: {
  children: ReactNode,
  isActive: Boolean,
  onClose: any
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside:EventListener = (event) => {
      const triggerEl = modalRef?.current;
      if (triggerEl && !triggerEl.contains((event?.target as Node))) {
        onClose();
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return isActive && (
    <StyledModal ref={modalRef}>
      { children }
    </StyledModal>
  )
}