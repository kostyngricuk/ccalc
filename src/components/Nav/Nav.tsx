import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BurgerSVG, CloseSVG } from '../../icons';
import NavItem, { INavItem } from '../NavItem/NavItem';
import Icon from '../UI/Icon/Icon';

import { StyledNav, StyledNavBurger, StyledNavWrap } from './StyledNav';
import { EnumButtonColor } from '../UI/Button/Button';

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
