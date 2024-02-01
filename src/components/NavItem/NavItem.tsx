import React from 'react';
import { NavLink } from 'react-router-dom';

import NavSub from '../NavSub/NavSub';
import StyledNavItem from './StylesNavItem';

export interface INavItem {
  id: number,
  link: string,
  title: string,
  submenu?: Array<INavItem>
}

export default function NavItem({
  item,
}: {
  item: INavItem
}) {
  const {
    link,
    title,
    submenu,
  } = item;
  return (
    <StyledNavItem>
      {
        submenu?.length ? (
          <NavSub link={link} title={title}>
            {
              submenu.map((subItem) => (
                <NavItem item={subItem} key={subItem.id} />
              ))
            }
          </NavSub>
        ) : (
          <NavLink to={link}>{ title }</NavLink>
        )
      }
    </StyledNavItem>
  );
}
