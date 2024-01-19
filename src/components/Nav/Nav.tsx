import { NavItem, NavItemProps } from "../NavItem/NavItem";

import './Nav.scss';

type NavProps = {
    items: Array<NavItemProps>
}

export const Nav = ({
    items
}: NavProps) => (
    <nav className="Nav">
        <ul className="Nav__wrapper">
            { items.map(item => <NavItem {...item} />) }
        </ul>
    </nav>
);