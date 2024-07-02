import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import paths from 'router/paths';
import hasAdditionalInfo from 'utils/auth';

import { useAppSelector } from 'hooks/store';
import { selectCurrentUser } from 'hooks/selectors';


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