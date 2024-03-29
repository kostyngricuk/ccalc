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

import { paths } from '../../services/router/paths';

export default function Header() {
    const { t } = useTranslation();

    const menuItems: Array<INavItem> = [
        {
            id: paths.calculator.id,
            link: paths.calculator.url,
            title: t('nav.calculator'),
        },
        {
            id: paths.help.id,
            link: paths.help.url,
            title: t('nav.help'),
            submenu: [
                {
                    id: paths.faq.id,
                    link: paths.faq.url,
                    title: t('nav.faq'),
                }
            ]
        },
        {
            id: paths.contacts.id,
            link: paths.contacts.url,
            title: t('nav.contacts')
        }
    ]

    const menuProfileItems: Array<INavItem> = [
        {
            id: paths.settings.id,
            link: paths.settings.url,
            title: t('nav.settings')
        },
        {
            id: paths.exit.id,
            link: paths.exit.url,
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