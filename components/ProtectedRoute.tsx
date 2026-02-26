import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

type Role = "advisor" | "broker dealer";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRole?: Role;
}> = ({ children, allowedRole }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  // Not logged in → go to login
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // Logged in but wrong role → force re-login
  if (allowedRole && user.role !== allowedRole) {
    logout(); // clear session immediately
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
