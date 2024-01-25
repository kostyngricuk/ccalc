import { NavLink } from "react-router-dom";
import { NavItem, INavItem } from "../NavItem/NavItem";
import { DropdownContent, DropdownTrigger } from "../UI/Dropdown/Dropdown";

import { StyledNavSub, StyledNavSubWrap } from "./StyledNavSub";

interface INavSub extends INavItem {
    items: Array<INavItem>
}

export const NavSub = ({
    link,
    title,
    items
}: INavSub) => {
    return (
        <StyledNavSub>
            <DropdownTrigger>
                <NavLink to={link}>{ title }</NavLink>
            </DropdownTrigger>
            <DropdownContent>
                <StyledNavSubWrap>
                    { items.map(item => <NavItem {...item} key={item.id}/>) }
                </StyledNavSubWrap>
            </DropdownContent>
        </StyledNavSub>
    )
};