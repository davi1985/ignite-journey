import { ReactNode } from "react";

export type SignInCredentials = {
  email: string;
  password: string;
};

export type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
