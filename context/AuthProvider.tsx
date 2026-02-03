import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type Role = "advisor" | "broker-dealer";

type User = {
  username: string;
  role: Role;
  token: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const LOCAL_KEY = "finworld_auth";

/** 🔐 Canonical credentials */
const CREDENTIALS = [
  { username: "FinWorld", password: "1234", role: "advisor" as Role },
  { username: "FinWorld", password: "10987", role: "broker dealer" as Role },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : null;
  });

  const navigate = useNavigate();

  const login = async (username: string, password: string) => {
    await new Promise((r) => setTimeout(r, 300)); // simulate latency

    const match = CREDENTIALS.find(
      (c) => c.username === username && c.password === password
    );

    if (!match) {
      throw new Error("Invalid credentials");
    }

    const userData: User = {
      username: match.username,
      role: match.role,
      token: btoa(`${match.role}:${Date.now()}`),
    };

    localStorage.setItem(LOCAL_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_KEY);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
