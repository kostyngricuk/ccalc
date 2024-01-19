import { NavItem, NavItemProps } from "../NavItem/NavItem";
import { Dropdown } from "../UI/Dropdown/Dropdown";

import './NavSub.scss';

type NavSubProps = {
    items: Array<NavItemProps>
}

export const NavSub = ({
    items
}: NavSubProps) => {
    return (
        <Dropdown className="NavSub" position="center">
            <ul className="NavSub__wrapper">
                { items.map(item => <NavItem {...item} />) }
            </ul>
        </Dropdown>
    )
};