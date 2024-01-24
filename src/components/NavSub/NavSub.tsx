import { NavItem, INavItem } from "../NavItem/NavItem";

import './NavSub.scss';

export const NavSub = ({
    items
}: {
    items: Array<INavItem>
}) => {
    return (
        <ul className="NavSub__wrapper">
            { items.map(item => <NavItem {...item} key={item.id}/>) }
        </ul>
    )
};