import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";
import { store } from "../store";
import { selectCurrentUser } from "../hooks/selectors";

export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = selectCurrentUser(store.getState())
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  if (currentUser && hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}