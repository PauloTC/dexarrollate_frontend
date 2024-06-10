"use client";
import { createContext, useState, useEffect } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [position, setPosition] = useState("vendedor");

  const isSeller = position === "vendedor";

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        return;
        a;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      setToken(token);
      setPosition(response.position);
    } catch (error) {
      console.log("error", error);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
    // router.push("/", { scroll: false });
  };

  const data = {
    accessToken: token,
    user,
    login,
    isSeller,
    logout,
    position,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
