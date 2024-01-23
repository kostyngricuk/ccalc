import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// pages
import ErrorScreen from './pages/ErrorScreen';
import Root from './pages';
import CalculatorScreen from './pages/CalculatorScreen';
import HelpScreen from './pages/HelpScreen';
import ContactsScreen from './pages/ContactsScreen';
import SettingsScreen from './pages/SettingsScreen';
import FaqScreen from './pages/FaqScreen';

import './services/i18n';

const router = createBrowserRouter([
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

const lightTheme = {
  color: {
    white: '#fff',
    black: '#000',
    primary: '#57b945',
    secondary: '#FFCF00',
    gray: 'rgba(0, 0, 0, 0.25)',
    red: '#C00',
    error: 'rgb(231, 24, 24)',
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
