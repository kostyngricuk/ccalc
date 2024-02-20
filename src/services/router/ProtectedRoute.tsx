import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({
  children,
  redirectTo
}: {
  children: ReactNode,
  redirectTo?: string
}) {
  const { user } = useAuth();

  if (user) {
    return children;
  }
  return !!redirectTo && <Navigate to={redirectTo} replace />;
}

ProtectedRoute.defaultProps = {
  redirectTo: paths.signin.url
}