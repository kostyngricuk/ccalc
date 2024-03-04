import React from 'react';
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
import useAuth from '../../services/hooks/useAuth';
import { setCredentials } from '../../services/reducers/auth';
import { useAppDispatch } from '../../services/hooks/store';
import hasAdditionalInfo from '../../services/utils/auth';

export default function Header() {
  const { t } = useTranslation();
  const { currentUser, isChangePassword } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setCredentials(null))
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

  const menuProfileItems: Array<INavItem> = hasAdditionalInfo(currentUser) && !isChangePassword ?
    [
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
    ]
  : [
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
            hasAdditionalInfo(currentUser) && !isChangePassword && (
              <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]} />
            )
          }
          <LanguageSwitcher />
          {
            hasAdditionalInfo(currentUser) && !isChangePassword && (
              <Tooltip text={t('calorieWidget.tooltip')}>
                <CalorieWidget
                  eaten={currentUser?.calorieWidget?.eaten}
                  limit={currentUser?.calorieWidget?.limit}
                />
              </Tooltip>
            )
          }
          {
            currentUser && <ProfileMenu items={menuProfileItems} />
          }
        </StyledHeaderContent>
      </Container>
    </StyledHeader>
  );
}
