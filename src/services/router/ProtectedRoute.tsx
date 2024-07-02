import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import paths from '@services/router/paths';
import hasAdditionalInfo from '@utils/auth';
import { selectCurrentUser } from '@services/hooks/selectors';
import { useAppSelector } from '@services/hooks/store';

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to={paths.signin.path} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser) && location.pathname !== paths.userInfo.path) {
    return <Navigate to={paths.userInfo.path} replace />;
  }
  return children;
}