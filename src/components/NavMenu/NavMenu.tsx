import { NavMenuItem, TypeNavMenuItem } from "../NavMenuItem/NavMenuItem";

import './NavMenu.scss';

type NavMenuProps = {
    items: Array<TypeNavMenuItem>
}

export const NavMenu = ({
    items
}: NavMenuProps) => (
    <nav className="NavMenu">
        <ul className="NavMenu__wrapper">
            { items.map(item => <NavMenuItem {...item} />) }
        </ul>
    </nav>
);