import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownContent, DropdownTrigger } from 'components/Dropdown'

import { StyledNavSub, StyledNavSubWrap } from './StyledNavSub';

export default function NavSub({
  link = '',
  title,
  children,
}: {
  link?: string,
  title: string,
  children: ReactNode
}) {
  return (
    <StyledNavSub>
      <DropdownTrigger>
        {
          link.length ? (
            <NavLink to={link}>{ title }</NavLink>
          ) : (
            <span>{ title }</span>
          )
        }
      </DropdownTrigger>
      <DropdownContent>
        <StyledNavSubWrap>
          { children }
        </StyledNavSubWrap>
      </DropdownContent>
    </StyledNavSub>
  );
}
