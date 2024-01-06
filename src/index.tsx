import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import store from './services/store';

// pages
import ErrorScreen from './pages/ErrorScreen';
import Root from './pages';
import CalculatorScreen from './pages/CalculatorScreen';
import AboutScreen from './pages/AboutScreen';
import ContactsScreen from './pages/ContactsScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/calculator',
        element: <CalculatorScreen />
      },
      {
        path: '/about',
        element: <AboutScreen />
      },
      {
        path: '/contacts',
        element: <ContactsScreen />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
