/* eslint-disable import/no-extraneous-dependencies */
import React, {ReactNode} from 'react'
import lightTheme from '@services/styled/themes'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { RootState, setupStore } from '@services/store';
import { Genders, TUser } from '@services/types/user';
import { BrowserRouter } from 'react-router-dom';

export function Providers({
  children,
  state,
}: {
  children: ReactNode,
  state: Partial<RootState>,
}) {
  const store = setupStore(state);
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  )
}

export const defaultMockUser: TUser = {
  id: 'unicStringId',
  height: 180,
  weight: 85,
  weightGoal: 80,
  age: 26,
  gender: Genders.man,
  email: 'mockUser@gmail.com',
  calorieWidget: {
    limit: 2300,
    eaten: 1980,
  },
}
