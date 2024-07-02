import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from '@services/store';
import { Notifications } from '@components/Notifications';

import router from '@services/router';
import '@services/i18n';
import lightTheme from './styled/themes';
import StyledGlobal from './styled/StyledGlobal';

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
