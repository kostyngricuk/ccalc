import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BurgerSVG, CloseSVG } from "../../icons";
import { NavItem, INavItem } from "../NavItem/NavItem";
import Icon from "../UI/Icon/Icon";

import { StyledNav, StyledNavBurger, StyledNavWrap } from "./StyledNav";

interface INav {
  items: Array<INavItem>;
  itemsMobile: Array<INavItem>;
};

export const Nav = ({ items, itemsMobile }: INav) => {
  let location = useLocation();

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
          <NavItem {...item} key={item.id} />
        ))}
      </StyledNavWrap>
      {$isActive && (
        <StyledNavWrap className="is-mobile">
          {itemsMobile.map((item) => (
            <NavItem {...item} key={item.id} />
          ))}
        </StyledNavWrap>
      )}
      <StyledNavBurger
        className="Nav__burger"
        color="black"
        $isIcon={true}
        $isOutline={true}
        ariaLabel="Menu"
        onClick={handleOnClick}
      >
        {$isActive ? <Icon Sprite={CloseSVG} /> : <Icon Sprite={BurgerSVG} />}
      </StyledNavBurger>
    </StyledNav>
  );
};
