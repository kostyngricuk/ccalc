import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import useAuth from "../hooks/useAuth";
import { hasAdditionalInfo } from "../utils/auth";

export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const { user } = useAuth();

  if (user && !hasAdditionalInfo(user)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  if (user && hasAdditionalInfo(user)) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}