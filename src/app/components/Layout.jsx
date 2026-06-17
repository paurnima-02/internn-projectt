import { useState, useRef, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { LayoutDashboard, Building2, PlusCircle, Users, FileText, BarChart3, UserCog, Settings as SettingsIcon, Bell, ChevronDown, TrendingUp, LogOut, User, Shield, X, CheckCircle2, AlertCircle, Info, Moon, Sun } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import CIPAssistant from "./CIPAssistant";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const notifications = [{
  id: 1,
  type: "success",
  title: "Report generated",
  body: "Q2 Market Analysis is ready to download.",
  time: "2 min ago",
  read: false
}, {
  id: 2,
  type: "alert",
  title: "New company added",
  body: "Apex Technologies was added by Sarah Park.",
  time: "18 min ago",
  read: false
}, {
  id: 3,
  type: "info",
  title: "Analytics sync complete",
  body: "All data has been refreshed with the latest metrics.",
  time: "1 hr ago",
  read: true
}, {
  id: 4,
  type: "alert",
  title: "User invitation sent",
  body: "Michael Chen was invited to join the platform.",
  time: "3 hr ago",
  read: true
}];
const notifIcons = {
  success: /*#__PURE__*/_jsxDEV(CheckCircle2, {
    className: "w-4 h-4 text-emerald-500"
  }, void 0, false),
  alert: /*#__PURE__*/_jsxDEV(AlertCircle, {
    className: "w-4 h-4 text-amber-500"
  }, void 0, false),
  info: /*#__PURE__*/_jsxDEV(Info, {
    className: "w-4 h-4 text-blue-500"
  }, void 0, false)
};
export function Layout() {
  const {
    user,
    logout
  } = useAuth();
  const {
    darkMode,
    toggleDarkMode
  } = useTheme();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifList, setNotifList] = useState(notifications);
  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const unread = notifList.filter(n => !n.read).length;
  useEffect(() => {
    const handler = e => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const markAllRead = () => setNotifList(n => n.map(x => ({
    ...x,
    read: true
  })));
  const dismiss = id => setNotifList(n => n.filter(x => x.id !== id));
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  const menuItems = [{
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard
  }, {
    path: "/companies",
    label: "Companies",
    icon: Building2
  }, {
    path: "/companies/add",
    label: "Add Company",
    icon: PlusCircle
  }, {
    path: "/contacts",
    label: "Contacts",
    icon: Users
  }, {
    path: "/reports",
    label: "Reports",
    icon: FileText
  }, {
    path: "/analytics",
    label: "Analytics",
    icon: BarChart3
  }, {
    path: "/users",
    label: "Users",
    icon: UserCog
  }];
  return /*#__PURE__*/_jsxDEV("div", {
    className: `flex h-screen ${darkMode ? "dark bg-[#0a0e1a]" : "bg-background"}`,
    children: [/*#__PURE__*/_jsxDEV("aside", {
      className: `w-64 flex flex-col ${darkMode ? "bg-[#0f1421]" : "bg-sidebar"}`,
      style: {
        borderRight: "1px solid rgba(255,255,255,0.08)"
      },
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "p-5",
        style: {
          borderBottom: "1px solid rgba(255,255,255,0.08)"
        },
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30",
            children: /*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-5 h-5 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-white font-bold text-base leading-tight",
              children: "CIP"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[#93b4ff] text-[10px] leading-tight",
              children: "Corporate Intelligence"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("nav", {
        className: "flex-1 p-3 space-y-0.5 overflow-y-auto",
        children: menuItems.map(item => /*#__PURE__*/_jsxDEV(NavLink, {
          to: item.path,
          end: item.path === "/",
          className: ({
            isActive
          }) => `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${isActive ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white"}`,
          children: [/*#__PURE__*/_jsxDEV(item.icon, {
            className: "w-4.5 h-4.5 shrink-0"
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: "font-medium",
            children: item.label
          }, void 0, false)]
        }, item.path, true))
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "flex-1 flex flex-col overflow-hidden",
      children: [/*#__PURE__*/_jsxDEV("header", {
        className: `h-16 border-b flex items-center justify-end px-6 shadow-sm ${darkMode ? "bg-[#0f1421] border-gray-800" : "bg-white border-border"}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsxDEV("button", {
            onClick: toggleDarkMode,
            className: `p-2.5 rounded-xl transition-colors ${darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"}`,
            title: darkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
            children: darkMode ? /*#__PURE__*/_jsxDEV(Sun, {
              className: "w-5 h-5 text-yellow-400"
            }, void 0, false) : /*#__PURE__*/_jsxDEV(Moon, {
              className: "w-5 h-5 text-muted-foreground"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            ref: notifRef,
            className: "relative",
            children: [/*#__PURE__*/_jsxDEV("button", {
              onClick: () => {
                setNotifOpen(!notifOpen);
                setProfileOpen(false);
              },
              className: `relative p-2.5 rounded-xl transition-colors ${darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"}`,
              children: [/*#__PURE__*/_jsxDEV(Bell, {
                className: `w-5 h-5 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`
              }, void 0, false), unread > 0 && /*#__PURE__*/_jsxDEV("span", {
                className: "absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-bold",
                children: unread
              }, void 0, false)]
            }, void 0, true), notifOpen && /*#__PURE__*/_jsxDEV("div", {
              className: `absolute right-0 top-12 w-96 rounded-2xl shadow-2xl border z-50 overflow-hidden ${darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"}`,
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: `flex items-center justify-between px-5 py-4 border-b ${darkMode ? "border-gray-700" : "border-border"}`,
                children: [/*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("h4", {
                    className: darkMode ? "text-white" : "text-[#0f172a]",
                    children: "Notifications"
                  }, void 0, false), unread > 0 && /*#__PURE__*/_jsxDEV("p", {
                    className: `text-xs ${darkMode ? "text-blue-400" : "text-[#4b5e9e]"}`,
                    children: [unread, " unread"]
                  }, void 0, true)]
                }, void 0, true), unread > 0 && /*#__PURE__*/_jsxDEV("button", {
                  onClick: markAllRead,
                  className: "text-xs text-[#1e40af] hover:underline font-medium",
                  children: "Mark all read"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: `max-h-80 overflow-y-auto divide-y ${darkMode ? "divide-gray-700" : "divide-border"}`,
                children: notifList.length === 0 ? /*#__PURE__*/_jsxDEV("div", {
                  className: `p-8 text-center text-sm ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                  children: "No notifications"
                }, void 0, false) : notifList.map(n => /*#__PURE__*/_jsxDEV("div", {
                  className: `flex gap-3 px-5 py-4 group transition-colors ${!n.read ? darkMode ? "bg-blue-900/20" : "bg-blue-50/50" : darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted/40"}`,
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "mt-0.5 shrink-0",
                    children: notifIcons[n.type]
                  }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                    className: "flex-1 min-w-0",
                    children: [/*#__PURE__*/_jsxDEV("div", {
                      className: "flex items-center justify-between gap-2",
                      children: [/*#__PURE__*/_jsxDEV("p", {
                        className: `text-sm font-medium truncate ${darkMode ? "text-white" : "text-[#0f172a]"}`,
                        children: n.title
                      }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                        onClick: () => dismiss(n.id),
                        className: `opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? "text-gray-400 hover:text-white" : "text-muted-foreground hover:text-foreground"}`,
                        children: /*#__PURE__*/_jsxDEV(X, {
                          className: "w-3.5 h-3.5"
                        }, void 0, false)
                      }, void 0, false)]
                    }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
                      className: `text-xs mt-0.5 leading-relaxed ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                      children: n.body
                    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                      className: `text-[10px] mt-1 ${darkMode ? "text-blue-400" : "text-[#4b5e9e]"}`,
                      children: n.time
                    }, void 0, false)]
                  }, void 0, true), !n.read && /*#__PURE__*/_jsxDEV("div", {
                    className: "w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"
                  }, void 0, false)]
                }, n.id, true))
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            ref: profileRef,
            className: "relative",
            children: [/*#__PURE__*/_jsxDEV("button", {
              onClick: () => {
                setProfileOpen(!profileOpen);
                setNotifOpen(false);
              },
              className: `flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-colors ${darkMode ? "hover:bg-[#1a1f2e]" : "hover:bg-muted"}`,
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-sm font-bold",
                children: user?.initials ?? "?"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "hidden sm:block text-left",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: `text-sm font-medium leading-tight ${darkMode ? "text-white" : "text-[#0f172a]"}`,
                  children: user?.name ?? "Guest"
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: `text-[10px] leading-tight ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                  children: user?.role ?? ""
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV(ChevronDown, {
                className: `w-4 h-4 transition-transform ${profileOpen ? "rotate-180" : ""} ${darkMode ? "text-gray-400" : "text-muted-foreground"}`
              }, void 0, false)]
            }, void 0, true), profileOpen && /*#__PURE__*/_jsxDEV("div", {
              className: `absolute right-0 top-12 w-72 rounded-2xl shadow-2xl border z-50 overflow-hidden ${darkMode ? "bg-[#0f1421] border-gray-700" : "bg-white border-border"}`,
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "px-5 py-4 bg-gradient-to-br from-[#0f2463] to-[#1e40af]",
                children: /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center gap-3",
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white font-bold",
                    children: user?.initials ?? "?"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                    children: [/*#__PURE__*/_jsxDEV("p", {
                      className: "text-white font-semibold",
                      children: user?.name
                    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                      className: "text-blue-200 text-xs",
                      children: user?.email
                    }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                      className: "inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-500/40 text-blue-100 text-[10px] font-medium",
                      children: user?.role
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: `px-5 py-4 space-y-2 border-b ${darkMode ? "border-gray-700" : "border-border"}`,
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: `text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                  children: "Profile Information"
                }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                  className: "space-y-1.5",
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    children: [/*#__PURE__*/_jsxDEV("p", {
                      className: `text-[10px] ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                      children: "Full Name"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                      className: `text-sm font-medium ${darkMode ? "text-white" : "text-[#0f172a]"}`,
                      children: user?.name
                    }, void 0, false)]
                  }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                    children: [/*#__PURE__*/_jsxDEV("p", {
                      className: `text-[10px] ${darkMode ? "text-gray-400" : "text-muted-foreground"}`,
                      children: "Email"
                    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                      className: `text-sm ${darkMode ? "text-white" : "text-[#0f172a]"}`,
                      children: user?.email
                    }, void 0, false)]
                  }, void 0, true)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "p-2",
                children: [/*#__PURE__*/_jsxDEV("button", {
                  onClick: () => {
                    navigate("/settings");
                    setProfileOpen(false);
                  },
                  className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"}`,
                  children: [/*#__PURE__*/_jsxDEV(SettingsIcon, {
                    className: `w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`
                  }, void 0, false), "App Settings"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => {
                    navigate("/security");
                    setProfileOpen(false);
                  },
                  className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"}`,
                  children: [/*#__PURE__*/_jsxDEV(Shield, {
                    className: `w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`
                  }, void 0, false), "Security"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
                  onClick: () => {
                    navigate("/account");
                    setProfileOpen(false);
                  },
                  className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm ${darkMode ? "hover:bg-[#1a1f2e] text-white" : "hover:bg-muted text-[#0f172a]"}`,
                  children: [/*#__PURE__*/_jsxDEV(User, {
                    className: `w-4 h-4 ${darkMode ? "text-gray-400" : "text-muted-foreground"}`
                  }, void 0, false), "Account"]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: `my-1 border-t ${darkMode ? "border-gray-700" : "border-border"}`
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                  onClick: handleLogout,
                  className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm text-red-600 ${darkMode ? "hover:bg-red-900/20" : "hover:bg-red-50"}`,
                  children: [/*#__PURE__*/_jsxDEV(LogOut, {
                    className: "w-4 h-4"
                  }, void 0, false), "Sign Out"]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("main", {
        className: `flex-1 overflow-auto p-6 ${darkMode ? "bg-[#0a0e1a]" : ""}`,
        children: /*#__PURE__*/_jsxDEV(Outlet, {}, void 0, false)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV(CIPAssistant, {
      darkMode: darkMode
    }, void 0, false)]
  }, void 0, true);
}
