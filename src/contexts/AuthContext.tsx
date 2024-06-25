"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { Token, User } from "@/api";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
}

type ContextProps = {
  accessToken: string | null;
  user: any;
  login: (token: string) => void;
  isLoading: boolean;
  logout: () => void;
  position: string;
}

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export function AuthProvider(props: Props) {
  const { children } = props;

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [position, setPosition] = useState("");
  const isLoading = position === "";

  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();

      if (!token) {
        logout();
        return;
      }

      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
  }, []);

  const login = async (token: string) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      setUser(response);
      setToken(token);
      setPosition(response.position);
    } catch (error) {
      return error;
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
    router.push("/", { scroll: false });
  };

  const data = {
    accessToken: token,
    user,
    login,
    isLoading,
    logout,
    position,
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}
