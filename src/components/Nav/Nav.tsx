import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BurgerSVG, CloseSVG } from "../../assets/icons";
import { NavItem, INavItem } from "../NavItem/NavItem";
import { Button } from "../UI/Button/Button";
import Icon from "../UI/Icon/Icon";

import "./Nav.scss";

interface INav {
  items: Array<INavItem>;
  itemsMobile: Array<INavItem>;
};

export const Nav = ({ items, itemsMobile }: INav) => {
  let location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  const handleOnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="Nav">
      <ul className="Nav__wrapper Nav__wrapper_desktop">
        {items.map((item) => (
          <NavItem {...item} key={item.id} />
        ))}
      </ul>
      {isActive && (
        <ul className="Nav__wrapper Nav__wrapper_mobile">
          {itemsMobile.map((item) => (
            <NavItem {...item} key={item.id} />
          ))}
        </ul>
      )}
      <Button
        className="Nav__burger"
        color="black"
        isIcon={true}
        isOutLine={true}
        ariaLabel="Menu"
        onClick={handleOnClick}
      >
        {isActive ? <Icon Sprite={CloseSVG} /> : <Icon Sprite={BurgerSVG} />}
      </Button>
    </nav>
  );
};
