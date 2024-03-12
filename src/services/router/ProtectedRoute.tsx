import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";
import { store } from "../store";
import { selectCurrentUser } from "../hooks/selectors";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = selectCurrentUser(store.getState())

  if (!currentUser) {
    return <Navigate to={paths.signin.url} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  return children;
}