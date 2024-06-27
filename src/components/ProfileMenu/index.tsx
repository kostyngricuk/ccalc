import React from 'react';
import { ProfileSVG } from '@icons/index';
import NavItem, { INavItem } from '@components/NavItem'
import Button from '@components/UI/Button'
import { DropdownTrigger, DropdownContent } from '@components/UI/Dropdown'

import Icon from '@components/UI/Icon'

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
          <Icon sprite={ProfileSVG} />
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
