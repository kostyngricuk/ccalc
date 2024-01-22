import Container from '../UI/Container/Container';
import { Tooltip } from '../UI/Tooltip/Tooltip';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { NavItemProps } from "../NavItem/NavItem";
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { CalorieWidget } from '../CalorieWidget/CalorieWidget';

import './Header.scss';

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

const menuProfileItems: Array<NavItemProps> = [
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
                <div className='Header__content'>
                    <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]}/>
                    <Tooltip text="Today calories limit">
                        <CalorieWidget value={765} limit={1980}/>
                    </Tooltip>
                    <ProfileMenu items={menuProfileItems} />
                </div>
            </Container>
        </header>
    );
}