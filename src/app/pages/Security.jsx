import { Shield, Key, Smartphone, Clock, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function Security() {
  const {
    darkMode
  } = useTheme();
  return /*#__PURE__*/_jsxDEV("div", {
    className: "max-w-4xl",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "mb-6",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: `text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
        children: "Security Settings"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: `text-sm ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
        children: "Manage your account security and authentication preferences"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`,
            children: /*#__PURE__*/_jsxDEV(Key, {
              className: "w-5 h-5 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Password"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Last changed 45 days ago. We recommend changing your password every 90 days."
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
              children: "Change Password"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`,
            children: /*#__PURE__*/_jsxDEV(Smartphone, {
              className: "w-5 h-5 text-emerald-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between mb-1",
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: `font-semibold ${darkMode ? 'text-white' : 'text-foreground'}`,
                children: "Two-Factor Authentication"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: `px-2 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`,
                children: "Enabled"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Add an extra layer of security to your account by requiring a verification code in addition to your password."
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`,
              children: "Manage 2FA"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-violet-900/30' : 'bg-violet-50'}`,
            children: /*#__PURE__*/_jsxDEV(Shield, {
              className: "w-5 h-5 text-violet-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Active Sessions"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Manage and monitor devices where you're currently logged in"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "space-y-3 mb-4",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: `p-3 rounded-xl border ${darkMode ? 'bg-[#1a1f2e] border-gray-700' : 'bg-muted/50 border-border'}`,
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "flex items-center gap-2",
                    children: [/*#__PURE__*/_jsxDEV("div", {
                      className: "w-2 h-2 rounded-full bg-emerald-500"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                      className: `font-medium text-sm ${darkMode ? 'text-white' : ''}`,
                      children: "Current Session"
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                    className: `text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                    children: "Active now"
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: `flex items-center gap-4 text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/_jsxDEV(MapPin, {
                      className: "w-3 h-3"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                      children: "San Francisco, CA"
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                    className: "flex items-center gap-1",
                    children: [/*#__PURE__*/_jsxDEV(Clock, {
                      className: "w-3 h-3"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                      children: "Chrome on macOS"
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: `p-3 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-border'}`,
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [/*#__PURE__*/_jsxDEV("span", {
                    className: `font-medium text-sm ${darkMode ? 'text-white' : ''}`,
                    children: "iPhone 14 Pro"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                    className: `text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                    children: "2 hours ago"
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: `flex items-center gap-4 text-xs ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                    children: /*#__PURE__*/_jsxDEV("div", {
                      className: "flex items-center gap-1",
                      children: [/*#__PURE__*/_jsxDEV(MapPin, {
                        className: "w-3 h-3"
                      }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                        children: "San Francisco, CA"
                      }, void 0, false)]
                    }, void 0, true)
                  }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                    className: "text-xs text-red-600 hover:underline",
                    children: "Revoke"
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
              className: "text-sm text-blue-600 hover:underline font-medium",
              children: "View All Sessions"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-amber-900/30' : 'bg-amber-50'}`,
            children: /*#__PURE__*/_jsxDEV(Clock, {
              className: "w-5 h-5 text-amber-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Login History"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Review recent login activity on your account"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`,
              children: "View History"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
