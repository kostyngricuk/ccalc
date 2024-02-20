import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import useAuth from "../hooks/useAuth";

export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}