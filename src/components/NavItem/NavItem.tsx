import { NavLink } from "react-router-dom";

import { NavSub } from "../NavSub/NavSub";
import { StyledNavItem } from "./StylesNavItem";

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
    <StyledNavItem>
        {
            submenu.length ? (
                <NavSub id={id} items={submenu} link={link} title={title}/>
            ) : (
                <NavLink to={link}>{ title }</NavLink>
            )
        }
    </StyledNavItem>
);