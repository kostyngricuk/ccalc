import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  RouterProvider
} from 'react-router-dom';

import { router } from './services/router';
import './services/i18n';
import { lightTheme } from './services/styled/themes';
import { StyledGlobal } from './services/styled/StyledGlobal';
import { AuthContext } from './services/contexts';
import { TUser } from './types/user';

import { getUserById } from './services/api/users';

export const App = () => {
    const user = getUserById(0);
    const [currentUser, setCurrentUser] = useState<TUser>(user);

    return (
        <ThemeProvider theme={lightTheme}>
            <AuthContext.Provider value={{
                currentUser,
                setCurrentUser
            }}>
                <RouterProvider router={router} />
                <StyledGlobal />
            </AuthContext.Provider>
        </ThemeProvider>
    );
}