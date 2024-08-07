import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import hasAdditionalInfo from 'utils/auth';
import paths from 'router/paths';
import { selectCurrentUser } from 'hooks/selectors';
import { useAppSelector } from 'hooks/store';

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