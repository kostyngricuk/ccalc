import { NavLink } from "react-router-dom";

import './NavItem.scss';
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { NavSub } from "../NavSub/NavSub";

type TypeNavItem = {
    link: string,
    title: string,
}

type TypeSubMenu = {
    submenu?: Array<TypeNavItem>
};

export type NavItemProps = TypeNavItem & TypeSubMenu;

export const NavItem = ({
    link,
    title,
    submenu = []
}: NavItemProps) => (
    <li className="NavItem">
        <NavLink to={link}>{ title }</NavLink>
        { submenu.length > 0 && <NavSub items={submenu}/> }
    </li>
);