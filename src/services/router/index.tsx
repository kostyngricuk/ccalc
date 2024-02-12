import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';

// pages
import Root from '../../pages';
import ErrorScreen from '../../pages/ErrorScreen';
import CalculatorScreen from '../../pages/CalculatorScreen';
import HelpScreen from '../../pages/HelpScreen';
import ContactsScreen from '../../pages/ContactsScreen';
import SettingsScreen from '../../pages/SettingsScreen';
import FaqScreen from '../../pages/FaqScreen';

import paths from './paths';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: paths.calculator.url,
        element: <CalculatorScreen />,
      },
      {
        path: paths.settings.url,
        element: <SettingsScreen />,
      },
      {
        path: paths.help.url,
        element: <HelpScreen />,
      },
      {
        path: paths.faq.url,
        element: <FaqScreen />,
      },
      {
        path: paths.contacts.url,
        element: <ContactsScreen />,
      },
    ],
  },
]);
export default router;
