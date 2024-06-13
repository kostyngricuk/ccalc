import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import NavSub from '@components/NavSub/NavSub';
import StyledNavItem from './StylesNavItem';

export interface INavItem {
  id: number | string,
  link?: string,
  title: string,
  submenu?: Array<INavItem>,
  handleClick?: MouseEventHandler
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
    handleClick
  } = item;

  if (submenu?.length) {
    return (
      <StyledNavItem>
        <NavSub link={link} title={title}>
          {
            submenu.map((subItem) => (
              <NavItem item={subItem} key={subItem.id} />
            ))
          }
        </NavSub>
      </StyledNavItem>
    );
  }
  return (
    <StyledNavItem>
      {
        link ? (
          <NavLink to={link}>{ title }</NavLink>
        ) : (
          <button type='button' onClick={handleClick}>{ title }</button>
        )
      }
    </StyledNavItem>
  );
}
