import { createContext } from "react";
import { api } from "../services/api";
import { AuthContextData, AuthProviderProps, SignInCredentials } from "./types";

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const isAuthenticated = false;

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const response = await api.post("sessions", { email, password });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
