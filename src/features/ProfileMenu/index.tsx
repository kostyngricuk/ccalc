import React from 'react';
import { ProfileSVG } from 'icons/index';
import Button from 'components/Button'
import { DropdownTrigger, DropdownContent } from 'components/Dropdown'

import Icon from 'components/Icon'
import NavItem, { INavItem } from 'features/NavItem'

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
