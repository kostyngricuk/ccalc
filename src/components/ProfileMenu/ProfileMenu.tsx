import { NavItem, NavItemProps } from "../NavItem/NavItem";
import { Button } from "../UI/Button/Button";
import { Dropdown, DropdownTrigger, DropdownContent } from "../UI/Dropdown/Dropdown";

import Icon from "../UI/Icon/Icon";
import { ProfileSVG } from "../../assets/icons";

import './ProfileMenu.scss';

type ProfileMenuProps = {
    items: Array<NavItemProps>
}

export const ProfileMenu = ({
    items
}: ProfileMenuProps) => {
    return (
        <Dropdown className="ProfileMenu" position="right">
            <DropdownTrigger showArrow={false}>
                <Button
                    isIcon={true}
                    isOutLine={true}
                    ariaLabel="Profile menu"
                >
                    <Icon Sprite={ProfileSVG} />
                </Button>
            </DropdownTrigger>
            <DropdownContent>
                <ul className="ProfileMenu__wrapper">
                    { items.map(item => <NavItem {...item} key={item.id}/>) }
                </ul>
            </DropdownContent>
        </Dropdown>
    )
};