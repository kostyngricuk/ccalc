import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import paths from "./paths";
import hasAdditionalInfo from "../utils/auth";
import { useAppSelector } from "../hooks/store";

export default function AuthRoute({
  children,
}: {
  children: ReactNode,
}) {
  const currentUser = useAppSelector((state) => state.user.user);
  if (currentUser && !hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.userInfo.url} replace />;
  }
  if (currentUser && hasAdditionalInfo(currentUser)) {
    return <Navigate to={paths.home.url} replace />;
  }
  return children;
}