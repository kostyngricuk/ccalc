import { NavLink } from "react-router-dom";

import './NavMenuItem.scss';

export type TypeNavMenuItem = {
    link: string,
    label: string,
}

export const NavMenuItem = ({
    link,
    label
}: TypeNavMenuItem) => (
    <li className="NavMenuItem">
        <NavLink to={link}>{ label }</NavLink>
    </li>
);