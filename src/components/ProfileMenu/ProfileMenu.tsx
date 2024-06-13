import React from 'react';
import { ProfileSVG } from '@icons/index';
import NavItem, { INavItem } from '@components/NavItem/NavItem';
import Button from '@components/UI/Button/Button';
import { DropdownTrigger, DropdownContent } from '@components/UI/Dropdown/Dropdown';

import Icon from '@components/UI/Icon/Icon';

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
