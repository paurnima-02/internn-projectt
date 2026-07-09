import { createContext, useContext, useState, ReactNode } from "react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const AuthContext = /*#__PURE__*/createContext(null);
const DEMO_USER = {
  name: "John Doe",
  email: "john.doe@corp.com",
  role: "Administrator",
  initials: "JD"
};
export function AuthProvider({
  children
}) {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    if (
      email !== "admin@cip.com" ||
      password !== "Admin@123"
    ) {
      return false;
    }

    const initials = email
      .split("@")[0]
      .split(".")
      .map((p) => p[0]?.toUpperCase() ?? "")
      .join("")
      .slice(0, 2);

    setUser({
      ...DEMO_USER,
      email,
      initials: initials || "U",
    });

    return true;
  };
  const register = (name, email, _password) => {
    const initials = name.split(" ").map(p => p[0]?.toUpperCase() ?? "").join("").slice(0, 2);
    setUser({
      name,
      email,
      role: "User",
      initials: initials || "U"
    });
    return true;
  };
  const logout = () => setUser(null);
  return /*#__PURE__*/_jsxDEV(AuthContext.Provider, {
    value: {
      user,
      login,
      register,
      logout
    },
    children: children
  }, void 0, false);
}
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
