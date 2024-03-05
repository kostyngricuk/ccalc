import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import router from './services/router';
import './services/i18n';
import lightTheme from './services/styled/themes';
import StyledGlobal from './services/styled/StyledGlobal';
import { store } from './services/store';
import { Notifications } from './components/UI/Notifications/Notifications';
import NotificationContext, { INotification, TNotification } from './services/notificationContext';


export default function App() {
  const [notifications, setNotifications] = useState<TNotification>([]);

  const addNotification = (notification: INotification) => {
    setNotifications((prev) => [...prev, notification]);
  }
  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter(el => el.id !== id));
  }

  const notificationContextValue = useMemo(() => ({
    notifications,
    addNotification,
    removeNotification
  }), [notifications]);

  return (
    <ThemeProvider theme={lightTheme}>
      <NotificationContext.Provider value={notificationContextValue}>
        <Provider store={store}>
            <RouterProvider router={router} />
            {
              !!notifications?.length && <Notifications items={notifications} />
            }
            <StyledGlobal />
        </Provider>
      </NotificationContext.Provider>
    </ThemeProvider>
  );
}
