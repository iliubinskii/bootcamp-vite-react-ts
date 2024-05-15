import React from "react";
import { AppContext } from "../app-context";
import { useNavigate } from "react-router";

export default function AuthGuard({ children, pageName }: Props) {
  const navigate = useNavigate();

  const { loggedIn } = React.useContext(AppContext);

  if (loggedIn) return <>{children}</>;

  navigate("/login", {
    state: { error: `You need to login to access ${pageName} page` },
  });
}

export interface Props {
  readonly children: React.ReactNode;
  readonly pageName: string;
}
