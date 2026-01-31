import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  email: string;
  name?: string;
  token?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_KEY = "finworld_auth";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Keep user synced with localStorage
    const handle = () => {
      try {
        const raw = localStorage.getItem(LOCAL_KEY);
        setUser(raw ? JSON.parse(raw) : null);
      } catch {
        setUser(null);
      }
    };

    window.addEventListener("storage", handle);
    return () => window.removeEventListener("storage", handle);
  }, []);

  const login = async (email: string, password: string) => {
    // Mocked login — development-only credential check. Replace with a real API later.
    await new Promise((r) => setTimeout(r, 400)); // simulate latency

    const VALID_EMAIL = "user@finworld.us";
    const VALID_PASSWORD = "Pass@123";

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      const fakeToken = btoa(`${email}:${Date.now()}`);
      const newUser: User = {
        email,
        name: email.split("@")[0],
        token: fakeToken,
      };
      localStorage.setItem(LOCAL_KEY, JSON.stringify(newUser));
      setUser(newUser);
      return;
    }

    throw new Error("Invalid email or password");
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
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
