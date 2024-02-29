import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import useAuth from "../hooks/useAuth";
import hasAdditionalInfo from "../utils/auth";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode,
}) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to={paths.signin.url} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  return children;
}