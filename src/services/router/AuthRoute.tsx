import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import paths from '@services/router/paths';
import hasAdditionalInfo from '@services/utils/auth';

import { useAppSelector } from '@services/hooks/store';
import { selectCurrentUser } from '@services/hooks/selectors';


export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = useAppSelector(selectCurrentUser);

  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.path} replace />;
  }
  if (currentUser && hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.home.path} replace />;
  }
  return children;
}