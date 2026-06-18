import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const ThemeContext = /*#__PURE__*/createContext(undefined);
export function ThemeProvider({
  children
}) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return /*#__PURE__*/_jsxDEV(ThemeContext.Provider, {
    value: {
      darkMode,
      toggleDarkMode
    },
    children: children
  }, void 0, false);
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
