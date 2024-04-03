import React from 'react';
import NavItem, { INavItem } from '../NavItem/NavItem';
import Button from '../UI/Button/Button';
import { DropdownTrigger, DropdownContent } from '../UI/Dropdown/Dropdown';

import Icon from '../UI/Icon/Icon';
import { ProfileSVG } from '../../icons';

import { StyledProfileMenu, StyledProfileMenuWrap } from './StyledProfileMenu';

export default function ProfileMenu({
  items,
}: {
  items: Array<INavItem>
}) {
  return (
    <StyledProfileMenu>
      <DropdownTrigger $showArrow={false}>
        <Button
          $isIcon
          $isOutline
          ariaLabel="Profile menu"
        >
          <Icon Sprite={ProfileSVG} />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <StyledProfileMenuWrap>
          {
            items.map((item) => (
              <NavItem item={item} key={item.id} />
            ))
          }
        </StyledProfileMenuWrap>
      </DropdownContent>
    </StyledProfileMenu>
  );
}
