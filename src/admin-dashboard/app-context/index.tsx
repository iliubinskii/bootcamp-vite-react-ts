import React from "react";
import { User, db } from "../db";

export function AppContextProvider({ children }: Props) {
  const [user, setUser] = React.useState<User>();

  return (
    <AppContext.Provider
      value={{
        loggedIn: user !== undefined,
        loginAsAdmin: async (username, password) => {
          const user = await db.getUser(username);

          if (user && user.password === password && user.admin) {
            setUser(user);

            return true;
          }

          return false;
        },
        logoff: () => setUser(undefined),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const AppContext = React.createContext<Context>({
  loggedIn: false,
  loginAsAdmin: async () => false,
  logoff: () => {},
});

export interface Context {
  readonly loggedIn: boolean;
  readonly loginAsAdmin: (
    username: string,
    password: string
  ) => Promise<boolean>;
  readonly logoff: () => void;
}

export interface Props {
  readonly children?: React.ReactNode | undefined;
}
