import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import router from './services/router';
import './services/i18n';
import lightTheme from './services/styled/themes';
import StyledGlobal from './services/styled/StyledGlobal';
import AuthContext from './services/contexts';
import { TUser } from './types/user';

import getUserById from './services/api/users';

export default function App() {
  const user = getUserById(0);
  const [currentUser, setCurrentUser] = useState<TUser>(user);

  const authValue = useMemo(() => ({
    currentUser,
    setCurrentUser,
  }), [currentUser]);

  return (
    <ThemeProvider theme={lightTheme}>
      <AuthContext.Provider value={authValue}>
        <RouterProvider router={router} />
        <StyledGlobal />
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
