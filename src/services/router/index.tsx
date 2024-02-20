import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';

import paths from './paths';

// pages
import Root from '../../pages';
import ErrorScreen from '../../pages/ErrorScreen';
import SigninScreen from '../../pages/SigninScreen';
import SignupScreen from '../../pages/SignupScreen';
import ResetScreen from '../../pages/ResetScreen';
import CalculatorScreen from '../../pages/CalculatorScreen';
import HelpScreen from '../../pages/HelpScreen';
import ContactsScreen from '../../pages/ContactsScreen';
import SettingsScreen from '../../pages/SettingsScreen';
import FaqScreen from '../../pages/FaqScreen';

import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: paths.signin.url,
        element: <AuthRoute><SigninScreen /></AuthRoute>,
      },
      {
        path: paths.signup.url,
        element: <AuthRoute><SignupScreen /></AuthRoute>,
      },
      {
        path: paths.reset.url,
        element: <AuthRoute><ResetScreen /></AuthRoute>,
      },
      {
        path: paths.calculator.url,
        element: <ProtectedRoute><CalculatorScreen /></ProtectedRoute>,
      },
      {
        path: paths.settings.url,
        element: <ProtectedRoute><SettingsScreen /></ProtectedRoute>,
      },
      {
        path: paths.help.url,
        element: <ProtectedRoute><HelpScreen /></ProtectedRoute>,
      },
      {
        path: paths.faq.url,
        element: <ProtectedRoute><FaqScreen /></ProtectedRoute>,
      },
      {
        path: paths.contacts.url,
        element: <ProtectedRoute><ContactsScreen /></ProtectedRoute>,
      },
    ],
  },
]);
export default router;
