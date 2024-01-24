import Container from '../UI/Container/Container';
import { Tooltip } from '../UI/Tooltip/Tooltip';
import Logo from '../Logo/Logo';
import { Nav } from '../Nav/Nav';
import { INavItem } from "../NavItem/NavItem";
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { CalorieWidget } from '../CalorieWidget/CalorieWidget';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

import { useTranslation } from 'react-i18next';
import { StyledHeader, StyledHeaderContent } from './StyleHeader';

export default function Header() {
    const { t } = useTranslation();

    const menuItems: Array<INavItem> = [
        {
            id: 0,
            link: '/',
            title: t('nav.calculator'),
        },
        {
            id: 1,
            link: '/help',
            title: t('nav.help'),
            submenu: [
                {
                    id: 2,
                    link: '/faq',
                    title: t('nav.faq'),
                }
            ]
        },
        {
            id: 4,
            link: '/contacts',
            title: t('nav.contacts')
        }
    ]

    const menuProfileItems: Array<INavItem> = [
        {
            id: 4,
            link: '/settings',
            title: t('nav.settings')
        },
        {
            id: 5,
            link: '/',
            title: t('nav.exit')
        }
    ]

    return (
        <StyledHeader>
            <Container>
                <Logo />
                <StyledHeaderContent>
                    <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]}/>
                    <LanguageSwitcher />
                    <Tooltip text={t('calorieWidget.tooltip')}>
                        <CalorieWidget eaten={765} limit={1980}/>
                    </Tooltip>
                    <ProfileMenu items={menuProfileItems} />
                </StyledHeaderContent>
            </Container>
        </StyledHeader>
    );
}