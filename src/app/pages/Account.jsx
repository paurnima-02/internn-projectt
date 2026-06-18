import { User, Mail, Briefcase, Calendar, Trash2, Download } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function Account() {
  const {
    user
  } = useAuth();
  const {
    darkMode
  } = useTheme();
  return /*#__PURE__*/_jsxDEV("div", {
    className: "max-w-4xl",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "mb-6",
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: `text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
        children: "Account Settings"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: `text-sm ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
        children: "Manage your personal information and account preferences"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "space-y-4",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`,
            children: /*#__PURE__*/_jsxDEV(User, {
              className: "w-5 h-5 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-4 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Profile Information"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("label", {
                  className: `block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                  children: "Full Name"
                }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                  type: "text",
                  defaultValue: user?.name,
                  className: `w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("label", {
                  className: `block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                  children: "Job Title"
                }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                  type: "text",
                  defaultValue: user?.role,
                  className: `w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
                className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                children: "Save Changes"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`,
            children: /*#__PURE__*/_jsxDEV(Mail, {
              className: "w-5 h-5 text-emerald-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Email Address"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Your primary email address for login and notifications"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-3 mb-4",
              children: [/*#__PURE__*/_jsxDEV("input", {
                type: "email",
                defaultValue: user?.email,
                className: `flex-1 px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: `px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`,
                children: "Verified"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`,
              children: "Update Email"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-violet-900/30' : 'bg-violet-50'}`,
            children: /*#__PURE__*/_jsxDEV(Briefcase, {
              className: "w-5 h-5 text-violet-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-4 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Work Information"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "space-y-4",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "grid grid-cols-2 gap-4",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("label", {
                    className: `block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                    children: "Department"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                    type: "text",
                    defaultValue: "Research & Analytics",
                    className: `w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`
                  }, void 0, false)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("label", {
                    className: `block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
                    children: "Employee ID"
                  }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                    type: "text",
                    defaultValue: "EMP-12345",
                    className: `w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 ${darkMode ? 'bg-[#1a1f2e] border-gray-700 text-white' : 'border-border bg-muted/30'}`
                  }, void 0, false)]
                }, void 0, true)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
                className: "px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity",
                children: "Update Information"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`,
            children: /*#__PURE__*/_jsxDEV(Calendar, {
              className: "w-5 h-5 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-2 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Account Activity"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "space-y-2 text-sm",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: `flex justify-between py-2 border-b ${darkMode ? 'border-gray-700' : 'border-border'}`,
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Account Created"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: `font-medium ${darkMode ? 'text-white' : ''}`,
                  children: "January 15, 2024"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: `flex justify-between py-2 border-b ${darkMode ? 'border-gray-700' : 'border-border'}`,
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Last Login"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: `font-medium ${darkMode ? 'text-white' : ''}`,
                  children: "Today at 9:42 AM"
                }, void 0, false)]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "flex justify-between py-2",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: darkMode ? 'text-gray-400' : 'text-muted-foreground',
                  children: "Account Type"
                }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                  className: `font-medium ${darkMode ? 'text-white' : ''}`,
                  children: "Professional"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-gray-700' : 'bg-white border-border'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'}`,
            children: /*#__PURE__*/_jsxDEV(Download, {
              className: "w-5 h-5 text-indigo-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Export Your Data"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Download a copy of all your data and activity from the platform"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: `px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${darkMode ? 'border-gray-700 hover:bg-[#1a1f2e] text-white' : 'border-border hover:bg-muted'}`,
              children: "Request Data Export"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: `rounded-2xl border p-6 shadow-sm ${darkMode ? 'bg-[#0f1421] border-red-900/50' : 'bg-white border-red-200'}`,
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${darkMode ? 'bg-red-900/30' : 'bg-red-50'}`,
            children: /*#__PURE__*/_jsxDEV(Trash2, {
              className: "w-5 h-5 text-red-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex-1",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              className: `font-semibold mb-1 ${darkMode ? 'text-white' : 'text-foreground'}`,
              children: "Delete Account"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: `text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-muted-foreground'}`,
              children: "Permanently delete your account and all associated data. This action cannot be undone."
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors",
              children: "Delete Account"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
