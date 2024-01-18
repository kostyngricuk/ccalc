import Container from '../UI/Container/Container';
import Logo from '../Logo/Logo';
import { NavMenu } from '../NavMenu/NavMenu';
import { TypeNavMenuItem } from "../NavMenuItem/NavMenuItem";


import './Header.scss';

const menuItems: Array<TypeNavMenuItem> = [
    {
        link: '/',
        label: 'Calculator'
    },
    {
        link: '/help',
        label: 'Help'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    }
]

export default function Header() {
    return (
        <header className='Header'>
            <Container className='Header__wrapper'>
                <Logo />
                <NavMenu items={menuItems}/>
                <div>
                    <span>Profile Menu</span>
                </div>
            </Container>
        </header>
    );
}