import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@services/store';
import lightTheme from '@services/styled/themes';
import { ThemeProvider } from 'styled-components';
import { EnhancedStore } from '@reduxjs/toolkit';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

function RenderWrapper({
    children,
    store
  }: {
    children: ReactNode,
    store: EnhancedStore
  }) {
    return (
      <ThemeProvider theme={lightTheme}>
        <Provider  store={store}>
          <div className='test'>123</div>
          {children}
        </Provider>
      </ThemeProvider>
    )
  }

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => (
  {
    store,
    ...render(
      ui,
      {
        wrapper: ({children}: PropsWithChildren) => <RenderWrapper store={store}>{children}</RenderWrapper>,
        ...renderOptions
      }
    )
  }
);

export * from '@testing-library/react'
export {renderWithProviders as render}