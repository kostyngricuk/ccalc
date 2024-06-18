import React, { ReactNode } from 'react';

import SigninScreen from '@pages/SigninScreen';
import SignupScreen from '@pages/SignupScreen';
import ResetScreen from '@pages/ResetScreen';
import UserInfoScreen from '@pages/UserInfoScreen';
import CalculatorScreen from '@pages/CalculatorScreen';
import HelpScreen from '@pages/HelpScreen';
import ContactsScreen from '@pages/ContactsScreen';
import SettingsScreen from '@pages/SettingsScreen';
import FaqScreen from '@pages/FaqScreen';

import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

export interface IPath {
  path: string,
  element?: ReactNode | undefined;
}

interface IPaths {
  [key: string]: IPath
}

const paths: IPaths = {
  home: {
    path: '/',
  },
  calculator: {
    path: '/',
    element: <ProtectedRoute><CalculatorScreen /></ProtectedRoute >,
  },
  help: {
    path: '/help',
    element: <ProtectedRoute><HelpScreen /></ProtectedRoute >,
  },
  faq: {
    path: '/faq',
    element: <ProtectedRoute><FaqScreen /></ProtectedRoute >,
  },
  contacts: {
    path: '/contacts',
    element: <ProtectedRoute><ContactsScreen /></ProtectedRoute >,
  },
  settings: {
    path: '/settings',
    element: <ProtectedRoute><SettingsScreen /></ProtectedRoute >,
  },
  exit: {
    path: '/exit',
  },
  signin: {
    path: '/login',
    element: <AuthRoute><SigninScreen /></AuthRoute >,
  },
  signup: {
    path: '/register',
    element: <AuthRoute><SignupScreen /></AuthRoute >,
  },
  reset: {
    path: '/reset',
    element: <ResetScreen />,
  },
  userInfo: {
    path: '/userInfo',
    element: <ProtectedRoute><UserInfoScreen /></ProtectedRoute >,
  }
};

export default paths;
