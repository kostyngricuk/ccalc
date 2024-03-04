import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import useAuth from "../hooks/useAuth";
import hasAdditionalInfo from "../utils/auth";

export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const { currentUser, isChangePassword } = useAuth();

  if (isChangePassword) {
    return <Navigate to={paths.changePassword.url} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  if (currentUser && hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}