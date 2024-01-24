import { NavLink } from "react-router-dom";

import './NavItem.scss';
import { Dropdown, DropdownTrigger, DropdownContent } from "../UI/Dropdown/Dropdown";
import { NavSub } from "../NavSub/NavSub";

export interface INavItem {
    id: number,
    link: string,
    title: string,
    submenu?: Array<INavItem>
}

export const NavItem = ({
    id,
    link,
    title,
    submenu = []
}: INavItem) => (
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