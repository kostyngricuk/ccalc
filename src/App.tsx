import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Notifications } from 'components/Notifications';

import lightTheme from 'styles/themes';
import StyledGlobal from 'styles/StyledGlobal';

import { store } from 'store/store';
import router from './router';
import './locales/i18n';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Notifications />
        <StyledGlobal />
      </Provider>
    </ThemeProvider>
  );
}
