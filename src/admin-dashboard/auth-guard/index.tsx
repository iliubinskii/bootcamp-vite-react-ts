import React from "react";
import { AppContext } from "../app-context";
import { Navigate } from "react-router";

export default function AuthGuard({ children, pageName }: Props) {
  const { loggedIn } = React.useContext(AppContext);

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ error: `Log in to access ${pageName} page` }}
    />
  );
}

export interface Props {
  readonly children: React.ReactNode;
  readonly pageName: string;
}
