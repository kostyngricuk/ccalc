import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '../UI/Container/Container';
import Tooltip from '../UI/Tooltip/Tooltip';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import { INavItem } from '../NavItem/NavItem';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import CalorieWidget from '../CalorieWidget/CalorieWidget';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import { StyledHeader, StyledHeaderContent } from './StyleHeader';

import paths from '../../services/router/paths';
import AuthContext from '../../services/contexts';
import { IAuthContext } from '../../types/user';

export default function Header() {
  const { t } = useTranslation();
  const {
    currentUser,
    setCurrentUser
  } = useContext<IAuthContext>(AuthContext);

  const handleLogout = () => {
    setCurrentUser(null)
  };

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
        },
      ],
    },
    {
      id: paths.contacts.id,
      link: paths.contacts.url,
      title: t('nav.contacts'),
    },
  ];

  const menuProfileItems: Array<INavItem> = [
    {
      id: paths.settings.id,
      link: paths.settings.url,
      title: t('nav.settings'),
    },
    {
      id: paths.exit.id,
      title: t('nav.exit'),
      handleClick: handleLogout
    },
  ];

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <StyledHeaderContent>
          {
            Boolean(currentUser) && (
              <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]} />
            )
          }
          <LanguageSwitcher />
          {
            Boolean(currentUser) && (
              <>
                <Tooltip text={t('calorieWidget.tooltip')}>
                  <CalorieWidget
                    eaten={currentUser?.calorieWidget?.eaten}
                    limit={currentUser?.calorieWidget?.limit}
                  />
                </Tooltip>
                <ProfileMenu items={menuProfileItems} />
              </>
            )
          }
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
}
