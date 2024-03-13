import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";
import { selectCurrentUser } from "../hooks/selectors";
import { useAppSelector } from "../hooks/store";

export default function ProtectedRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to={paths.signin.url} replace />;
  }
  if (currentUser && !hasAdditionalInfo(currentUser) && location.pathname !== paths.userInfo.url) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  return children;
}