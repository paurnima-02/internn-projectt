import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export default function App() {
  return /*#__PURE__*/_jsxDEV(ThemeProvider, {
    children: /*#__PURE__*/_jsxDEV(AuthProvider, {
      children: /*#__PURE__*/_jsxDEV(RouterProvider, {
        router: router
      }, void 0, false)
    }, void 0, false)
  }, void 0, false);
}
