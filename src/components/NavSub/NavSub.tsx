import { NavItem, NavItemProps } from "../NavItem/NavItem";

import './NavSub.scss';

type NavSubProps = {
    items: Array<NavItemProps>
}

export const NavSub = ({
    items
}: NavSubProps) => {
    return (
        <ul className="NavSub__wrapper">
            { items.map(item => <NavItem {...item} key={item.title}/>) }
        </ul>
    )
};