import { Save, Bell, Lock, Globe } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function Settings() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "max-w-5xl space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "mb-2",
        children: "Settings"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-muted-foreground",
        children: "Manage application preferences and system settings. Profile settings are available via your avatar in the top-right corner."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsxDEV(Lock, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
          children: "Security Settings"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "currentPassword",
            className: "block mb-2",
            children: "Current Password"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            type: "password",
            id: "currentPassword",
            placeholder: "Enter current password",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "newPassword",
              className: "block mb-2",
              children: "New Password"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "password",
              id: "newPassword",
              placeholder: "Enter new password",
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "confirmPassword",
              className: "block mb-2",
              children: "Confirm Password"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "password",
              id: "confirmPassword",
              placeholder: "Confirm new password",
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "font-medium mb-1",
              children: "Two-Factor Authentication"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground",
              children: "Add an extra layer of security to your account"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "sr-only peer"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsxDEV(Bell, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
          children: "Notification Preferences"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "font-medium mb-1",
              children: "Email Notifications"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground",
              children: "Receive updates about companies and contacts"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "font-medium mb-1",
              children: "Weekly Reports"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground",
              children: "Get weekly summary of your activities"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "font-medium mb-1",
              children: "Browser Notifications"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground",
              children: "Get notified in your browser"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "sr-only peer"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "font-medium mb-1",
              children: "Mobile Push Notifications"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground",
              children: "Receive push notifications on mobile"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("label", {
            className: "relative inline-flex items-center cursor-pointer",
            children: [/*#__PURE__*/_jsxDEV("input", {
              type: "checkbox",
              className: "sr-only peer",
              defaultChecked: true
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-3 mb-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
          children: /*#__PURE__*/_jsxDEV(Globe, {
            className: "w-5 h-5 text-primary"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
          children: "System Preferences"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "grid grid-cols-2 gap-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "language",
            className: "block mb-2",
            children: "Language"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "language",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "en",
              children: "English"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "hi",
              children: "Hindi"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "es",
              children: "Spanish"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "timezone",
            className: "block mb-2",
            children: "Timezone"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "timezone",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "ist",
              children: "India Standard Time (IST)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "pst",
              children: "Pacific Standard Time (PST)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "est",
              children: "Eastern Standard Time (EST)"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "dateFormat",
            className: "block mb-2",
            children: "Date Format"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "dateFormat",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "dd/mm/yyyy",
              children: "DD/MM/YYYY"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "mm/dd/yyyy",
              children: "MM/DD/YYYY"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "yyyy-mm-dd",
              children: "YYYY-MM-DD"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("label", {
            htmlFor: "currency",
            className: "block mb-2",
            children: "Currency"
          }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
            id: "currency",
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
            children: [/*#__PURE__*/_jsxDEV("option", {
              value: "inr",
              children: "INR (₹)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "usd",
              children: "USD ($)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
              value: "eur",
              children: "EUR (€)"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/_jsxDEV("button", {
        className: "flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsxDEV(Save, {
          className: "w-5 h-5"
        }, void 0, false), "Save Changes"]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
        children: "Cancel"
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
