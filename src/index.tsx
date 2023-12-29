import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import store from './app/store';

// pages
import ErrorPage from './pages/error';
import RootPage from './pages';
import AboutPage from './pages/about';
import ContactsPage from './pages/contacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contacts',
        element: <ContactsPage />
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
