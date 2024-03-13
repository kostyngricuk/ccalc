import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";

import { useAppSelector } from "../hooks/store";
import { selectCurrentUser } from "../hooks/selectors";


export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (currentUser && !hasAdditionalInfo(currentUser) && location.pathname !== paths.reset.url) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  if (currentUser && location.pathname === paths.reset.url) {
    return <Navigate to={paths.changePassword.url} replace />;
  }
  if (currentUser && hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}