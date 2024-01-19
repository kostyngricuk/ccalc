import Container from '../UI/Container/Container';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { NavItemProps } from "../NavItem/NavItem";


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

export default function Header() {
    return (
        <header className='Header'>
            <Container className='Header__wrapper'>
                <Logo />
                <Nav items={menuItems}/>
                <div>
                    <span>Profile Menu</span>
                </div>
            </Container>
        </header>
    );
}