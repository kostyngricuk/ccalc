import { NavLink } from "react-router-dom";

import './NavItem.scss';
import { Dropdown, DropdownTrigger, DropdownContent } from "../UI/Dropdown/Dropdown";
import { NavSub } from "../NavSub/NavSub";

type TypeNavItem = {
    id: number,
    link: string,
    title: string,
}

type TypeSubMenu = {
    submenu?: Array<TypeNavItem>
};

export type NavItemProps = TypeNavItem & TypeSubMenu;

export const NavItem = ({
    id,
    link,
    title,
    submenu = []
}: NavItemProps) => (
    <li className="NavItem">
        {
            submenu.length ? (
                <Dropdown className="NavSub" position="center">
                    <DropdownTrigger>
                        <NavLink to={link}>{ title }</NavLink>
                    </DropdownTrigger>
                    <DropdownContent>
                        <NavSub items={submenu}/>
                    </DropdownContent>
                </Dropdown>
            ) : (
                <NavLink to={link}>{ title }</NavLink>
            )
        }
    </li>
);