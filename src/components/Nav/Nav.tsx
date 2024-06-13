import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BurgerSVG, CloseSVG } from '@icons/index';
import Icon from '@components/UI/Icon/Icon';
import { EnumButtonColor } from '@components/UI/Button/Button';
import NavItem, { INavItem } from '@components/NavItem/NavItem';

import { StyledNav, StyledNavBurger, StyledNavWrap } from './StyledNav';

interface INav {
  items: Array<INavItem>;
  itemsMobile: Array<INavItem>;
}

export default function Nav({ items, itemsMobile }: INav) {
  const location = useLocation();

  const [$isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  const handleOnClick = () => {
    setIsActive(!$isActive);
  };

  return (
    <StyledNav>
      <StyledNavWrap className="is-desktop">
        {items.map((item) => (
          <NavItem
            key={item.id}
            item={item}
          />
        ))}
      </StyledNavWrap>
      {$isActive && (
        <StyledNavWrap className="is-mobile">
          {itemsMobile.map((item) => (
            <NavItem
              key={item.id}
              item={item}
            />
          ))}
        </StyledNavWrap>
      )}
      <StyledNavBurger
        className="Nav__burger"
        color={EnumButtonColor.black}
        $isIcon
        $isOutline
        ariaLabel="Menu"
        onClick={handleOnClick}
      >
        {$isActive ? <Icon Sprite={CloseSVG} /> : <Icon Sprite={BurgerSVG} />}
      </StyledNavBurger>
    </StyledNav>
  );
}
