/* eslint-disable import/no-extraneous-dependencies */
import React, {PropsWithChildren, ReactNode} from 'react'
import lightTheme from '@services/styled/themes'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { RootState } from '@services/store';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import configureMockStore, { MockStore, MockStoreCreator } from 'redux-mock-store';
import { Genders, TUser } from '@services/types/user';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  mockStore?: MockStoreCreator,
  store?: MockStore
}

export function Providers({
  children,
  store,
}: {
  children: ReactNode,
  store: MockStore,
}) {
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

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    mockStore = configureMockStore(),
    store = mockStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  return {
    store,
    ...render(
      ui,
      {
        wrapper: ({ children }: PropsWithChildren<{}>) => (
          <Providers store={store}>
            { children}
          </Providers>
        ),
        ...renderOptions
      }
    )
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {renderWithProviders as render}

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
