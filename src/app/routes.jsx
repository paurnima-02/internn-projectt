import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Companies } from "./pages/Companies";
import { AddCompany } from "./pages/AddCompany";
import { CompanyDetail } from "./pages/CompanyDetail";
import { Contacts } from "./pages/Contacts";
import { Database } from "./pages/Database";
import { Reports } from "./pages/Reports";
import { Marketing } from "./pages/Marketing";
import { Analytics } from "./pages/Analytics";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Security } from "./pages/Security";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import { useAuth } from "./context/AuthContext";

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace={true} />;
  return <>{children}</>;
}

function PublicOnly({ children }) {
  const { user } = useAuth();
  if (user) return <Navigate to="/" replace={true} />;
  return <>{children}</>;
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <PublicOnly><Login /></PublicOnly>
  },
  {
    path: "/register",
    element: <PublicOnly><Register /></PublicOnly>
  },
  {
    path: "/forgot-password",
    element: <PublicOnly><ForgotPassword /></PublicOnly>
  },
  {
    path: "/reset-password/:token",
    element: <PublicOnly><ResetPassword /></PublicOnly>
  },
  {
    path: "/",
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      { index: true, Component: Dashboard },
      { path: "companies", Component: Companies },
      { path: "companies/add", Component: AddCompany },
      { path: "companies/:id", Component: CompanyDetail },
      { path: "contacts", Component: Contacts },
      { path: "database", Component: Database },
      { path: "reports", Component: Reports },
      { path: "marketing", Component: Marketing },
      { path: "analytics", Component: Analytics },
      { path: "users", Component: Users },
      { path: "settings", Component: Settings },
      { path: "security", Component: Security },
      { path: "account", Component: Account },
    ]
  },
  {
    path: "/admin",
    element: <Navigate to="/" replace={true} />
  },
  {
    path: "*",
    element: <Navigate to="/login" replace={true} />
  }
]);
