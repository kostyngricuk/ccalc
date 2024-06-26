import React, {ReactNode} from 'react'
import lightTheme from '@services/styled/themes'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'

function Providers({
  children,
  store
}: {
  children: ReactNode,
  store: Store
}) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default Providers;
