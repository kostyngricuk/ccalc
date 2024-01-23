import Container from '../UI/Container/Container';
import { Tooltip } from '../UI/Tooltip/Tooltip';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { NavItemProps } from "../NavItem/NavItem";
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { CalorieWidget } from '../CalorieWidget/CalorieWidget';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

import './Header.scss';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation();

    const menuItems: Array<NavItemProps> = [
        {
            link: '/',
            title: t('nav.calculator'),
        },
        {
            link: '/help',
            title: t('nav.help'),
            submenu: [
                {
                    link: '/faq',
                    title: t('nav.faq'),
                }
            ]
        },
        {
            link: '/contacts',
            title: t('nav.contacts')
        }
    ]

    const menuProfileItems: Array<NavItemProps> = [
        {
            link: '/settings',
            title: t('nav.settings')
        },
        {
            link: '/',
            title: t('nav.exit')
        }
    ]

    return (
        <header className='Header'>
            <Container className='Header__wrapper'>
                <Logo />
                <div className='Header__content'>
                    <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]}/>
                    <LanguageSwitcher />
                    <Tooltip text="Today calories limit">
                        <CalorieWidget value={765} limit={1980}/>
                    </Tooltip>
                    <ProfileMenu items={menuProfileItems} />
                </div>
            </Container>
        </header>
    );
}