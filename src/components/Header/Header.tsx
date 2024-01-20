import Container from '../UI/Container/Container';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { NavItemProps } from "../NavItem/NavItem";


import './Header.scss';
import { Dropdown, DropdownTrigger, DropdownContent } from '../UI/Dropdown/Dropdown';
import { Button } from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import { ProfileSVG } from '../../assets/icons';

const menuItems: Array<NavItemProps> = [
    {
        link: '/',
        title: 'Calculator',
    },
    {
        link: '/help',
        title: 'Help',
        submenu: [
            {
                link: '/faq',
                title: 'FAQ',
            }
        ]
    },
    {
        link: '/contacts',
        title: 'Contacts'
    }
]

const menuItemsMobile: Array<NavItemProps> = [
    ...menuItems,
    {
        link: '/settings',
        title: 'Settings'
    },
    {
        link: '/',
        title: 'Exit'
    }
]

export default function Header() {
    return (
        <header className='Header'>
            <Container className='Header__wrapper'>
                <Logo />
                <Nav items={menuItems} itemsMobile={menuItemsMobile}/>
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
                        Profile
                    </DropdownContent>
                </Dropdown>
            </Container>
        </header>
    );
}