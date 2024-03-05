import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";
import { IUser } from "../types/user";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode,
}) {
  const isChangePassword = false;
  const currentUser: IUser = {
    email: 'test@gmail.com'
  }

  if (!currentUser) {
    return <Navigate to={paths.signin.url} replace />;
  }
  if (isChangePassword) {
    return <Navigate to={paths.changePassword.url} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  return children;
}