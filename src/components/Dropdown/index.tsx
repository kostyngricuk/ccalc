import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import { ArrowUpSVG, ArrowDownSVG } from 'icons/index';
import Icon from 'components/Icon'

import { StyledDropdownContent, StyledDropdownTrigger } from './StyledDropdown';

export function DropdownTrigger({
  children,
  $showArrow = true,
}: {
  children: ReactNode,
  $showArrow?: boolean
}) {
  const location = useLocation();

  const [$isActive, setIsActive] = useState(false);
  const refTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside:EventListener = (event) => {
      const triggerEl = refTrigger?.current;
      if (triggerEl && !triggerEl.contains((event?.target as Node) || null)) {
        setIsActive(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleOnClick = () => {
    setIsActive(!$isActive);
  };

  return (
    <StyledDropdownTrigger
      $isActive={$isActive}
      data-active={$isActive}
      $showArrow={$showArrow}
      ref={refTrigger}
      onClick={handleOnClick}
    >
      { children }
      {
        $showArrow && $isActive && (
          <Icon sprite={ArrowUpSVG}/>
        )
      }
      {
        $showArrow && !$isActive && (
          <Icon sprite={ArrowDownSVG} />
        )
      }
    </StyledDropdownTrigger>
  );
}

export function DropdownContent({
  children,
}: {
  children: ReactNode
}) {
  return (
    <StyledDropdownContent className="DropdownContent">
      { children }
    </StyledDropdownContent>
  );
}
