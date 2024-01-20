import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BurgerSVG, CloseSVG } from "../../assets/icons";
import { NavItem, NavItemProps } from "../NavItem/NavItem";
import { Button } from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

import "./Nav.scss";

type NavProps = {
  items: Array<NavItemProps>;
  itemsMobile: Array<NavItemProps>;
};

export const Nav = ({ items, itemsMobile }: NavProps) => {
  let location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsActive(false);
    }
  }, [location]);

  return (
    <nav className="Nav">
      <ul className="Nav__wrapper Nav__wrapper_desktop">
        {items.map((item) => (
          <NavItem {...item} key={item.title} />
        ))}
      </ul>
      {isActive && (
        <ul className="Nav__wrapper Nav__wrapper_mobile">
          {itemsMobile.map((item) => (
            <NavItem {...item} key={item.title} />
          ))}
        </ul>
      )}
      <Button
        className="Nav__burger"
        color="black"
        isIcon={true}
        isOutLine={true}
        ariaLabel="Menu"
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? <Icon Sprite={CloseSVG} /> : <Icon Sprite={BurgerSVG} />}
      </Button>
    </nav>
  );
};
