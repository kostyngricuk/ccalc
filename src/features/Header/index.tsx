import React from 'react';
import { useTranslation } from 'react-i18next';

import paths from 'router/paths';
import hasAdditionalInfo from 'utils/auth';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { logoutRequest } from 'store/slices/userSlice';
import { selectCurrentUser } from 'hooks/selectors';
import Container from 'components/Container'
import Tooltip from 'components/Tooltip'
import Logo from 'features/Logo'
import Nav from 'features/Nav'
import { INavItem } from 'features/NavItem'
import ProfileMenu from 'features/ProfileMenu'
import CalorieWidget from 'features/CalorieWidget'
import LanguageSwitcher from 'features/LanguageSwitcher'

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
    <StyledHeader data-testid="header">
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
