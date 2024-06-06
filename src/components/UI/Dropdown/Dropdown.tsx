import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import Icon from '../Icon/Icon';
import { ArrowUpSVG, ArrowDownSVG } from '../../../icons';

import { StyledDropdown, StyledDropdownContent, StyledDropdownTrigger } from './StyledDropdown';

export function Dropdown({
  className,
  children,
}: {
  className?: string,
  children: ReactNode
}) {
  return (
    <StyledDropdown className={className}>
      { children }
    </StyledDropdown>
  );
}
Dropdown.defaultProps = {
  className: '',
};

export function DropdownTrigger({
  children,
  $showArrow,
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
      $showArrow={$showArrow}
      ref={refTrigger}
      onClick={handleOnClick}
    >
      { children }
      {
        $showArrow && $isActive && (
          <Icon Sprite={ArrowUpSVG} />
        )
      }
      {
        $showArrow && !$isActive && (
          <Icon Sprite={ArrowDownSVG} />
        )
      }
    </StyledDropdownTrigger>
  );
}
DropdownTrigger.defaultProps = {
  $showArrow: true,
};

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
