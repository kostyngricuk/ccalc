import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';

import Root from 'pages/index';
import ErrorScreen from 'pages/ErrorScreen';
import paths, { IPath } from 'router/paths';

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
