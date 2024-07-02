/* eslint-disable import/no-extraneous-dependencies */
import React, {PropsWithChildren, ReactNode} from 'react'
import lightTheme from 'styles/themes'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { RootState } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import configureMockStore, { MockStore, MockStoreCreator } from 'redux-mock-store';
import { I18nextProvider } from 'react-i18next';
import i18n from 'locales/i18nForTests';
import { Genders, TUser } from 'types/user';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
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
        <I18nextProvider i18n={i18n} defaultNS="translation">
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </I18nextProvider>
      </Provider>
    </ThemeProvider>
  )
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const mockStore: MockStoreCreator = configureMockStore();
  const store: MockStore = mockStore(preloadedState);
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
