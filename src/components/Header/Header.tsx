import React from 'react';
import { useTranslation } from 'react-i18next';

import paths from '@services/router/paths';
import hasAdditionalInfo from '@services/utils/auth';
import { useAppDispatch, useAppSelector } from '@services/hooks/store';
import { logoutRequest } from '@services/reducers/userSlice';
import { selectCurrentUser } from '@services/hooks/selectors';
import Container from '@components/UI/Container/Container';
import Tooltip from '@components/UI/Tooltip/Tooltip';
import Logo from '@components/Logo/Logo';
import Nav from '@components/Nav/Nav';
import { INavItem } from '@components/NavItem/NavItem';
import ProfileMenu from '@components/ProfileMenu/ProfileMenu';
import CalorieWidget from '@components/CalorieWidget/CalorieWidget';
import LanguageSwitcher from '@components/LanguageSwitcher/LanguageSwitcher';

import { StyledHeader, StyledHeaderContent } from './StyleHeader';


export default function Header() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest())
  };

  const currentUser = useAppSelector(selectCurrentUser);

  const menuItems: Array<INavItem> = [
    {
      id: 'calculator',
      link: paths.calculator.path,
      title: t('nav.calculator'),
    },
    {
      id: "help",
      link: paths.help.path,
      title: t('nav.help'),
      submenu: [
        {
          id: "faq",
          link: paths.faq.path,
          title: t('nav.faq'),
        },
      ],
    },
    {
      id: "contacts",
      link: paths.contacts.path,
      title: t('nav.contacts'),
    },
  ];

  const menuProfileItems: Array<INavItem> = hasAdditionalInfo(currentUser) ?
    [
      {
        id: "settings",
        link: paths.settings.path,
        title: t('nav.settings'),
      },
      {
        id: "exit",
        title: t('nav.exit'),
        handleClick: handleLogout
      },
    ]
  : [
      {
        id: "exit",
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
            hasAdditionalInfo(currentUser) && (
              <Nav items={menuItems} itemsMobile={[...menuItems, ...menuProfileItems]} />
            )
          }
          <LanguageSwitcher />
          {
            hasAdditionalInfo(currentUser) && (
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
