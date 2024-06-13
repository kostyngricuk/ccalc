import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';

import paths, { IPath } from '@services/router/paths';

// pages
import Root from '@pages/index';
import ErrorScreen from '@pages/ErrorScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: Object.values(paths).map((item: IPath) => !!item.element && ({
      path: item.path,
      element: item.element,
    })) as RouteObject[]
  },
]);
export default router;
