import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { IAuthContext } from "../../types/user";
import AuthContext from "../contexts";
import paths from "./paths";

export default function ProtectedRoute({
  children,
  redirectTo
}: {
  children: ReactNode,
  redirectTo?: string
}) {
  const {
    currentUser,
  } = useContext<IAuthContext>(AuthContext);

  if (currentUser) {
    return children;
  }
  return !!redirectTo && <Navigate to={redirectTo} replace />;
}

ProtectedRoute.defaultProps = {
  redirectTo: paths.signin.url
}