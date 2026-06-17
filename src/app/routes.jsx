import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Companies } from "./pages/Companies";
import { AddCompany } from "./pages/AddCompany";
import { CompanyDetail } from "./pages/CompanyDetail";
import { Contacts } from "./pages/Contacts";
import { Reports } from "./pages/Reports";
import { Analytics } from "./pages/Analytics";
import { Users } from "./pages/Users";
import { Settings } from "./pages/Settings";
import { Security } from "./pages/Security";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useAuth } from "./context/AuthContext";
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
function RequireAuth({
  children
}) {
  const {
    user
  } = useAuth();
  if (!user) return /*#__PURE__*/_jsxDEV(Navigate, {
    to: "/login",
    replace: true
  }, void 0, false);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: children
  }, void 0, false);
}
function PublicOnly({
  children
}) {
  const {
    user
  } = useAuth();
  if (user) return /*#__PURE__*/_jsxDEV(Navigate, {
    to: "/",
    replace: true
  }, void 0, false);
  return /*#__PURE__*/_jsxDEV(_Fragment, {
    children: children
  }, void 0, false);
}
export const router = createBrowserRouter([{
  path: "/login",
  element: /*#__PURE__*/_jsxDEV(PublicOnly, {
    children: /*#__PURE__*/_jsxDEV(Login, {}, void 0, false)
  }, void 0, false)
}, {
  path: "/register",
  element: /*#__PURE__*/_jsxDEV(PublicOnly, {
    children: /*#__PURE__*/_jsxDEV(Register, {}, void 0, false)
  }, void 0, false)
}, {
  path: "/",
  element: /*#__PURE__*/_jsxDEV(RequireAuth, {
    children: /*#__PURE__*/_jsxDEV(Layout, {}, void 0, false)
  }, void 0, false),
  children: [{
    index: true,
    Component: Dashboard
  }, {
    path: "companies",
    Component: Companies
  }, {
    path: "companies/add",
    Component: AddCompany
  }, {
    path: "companies/:id",
    Component: CompanyDetail
  }, {
    path: "contacts",
    Component: Contacts
  }, {
    path: "reports",
    Component: Reports
  }, {
    path: "analytics",
    Component: Analytics
  }, {
    path: "users",
    Component: Users
  }, {
    path: "settings",
    Component: Settings
  }, {
    path: "security",
    Component: Security
  }, {
    path: "account",
    Component: Account
  }]
}]);
