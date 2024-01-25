import {
    createBrowserRouter
} from 'react-router-dom';

// pages
import Root from '../pages';
import ErrorScreen from '../pages/ErrorScreen';
import CalculatorScreen from '../pages/CalculatorScreen';
import HelpScreen from '../pages/HelpScreen';
import ContactsScreen from '../pages/ContactsScreen';
import SettingsScreen from '../pages/SettingsScreen';
import FaqScreen from '../pages/FaqScreen';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorScreen />,
      children: [
        {
          path: '/',
          element: <CalculatorScreen />
        },
        {
          path: '/settings',
          element: <SettingsScreen />
        },
        {
          path: '/help',
          element: <HelpScreen />
        },
        {
          path: '/faq',
          element: <FaqScreen />
        },
        {
          path: '/contacts',
          element: <ContactsScreen />
        }
      ]
    }
  ])