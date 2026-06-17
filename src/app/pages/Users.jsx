import { useState } from "react";
import { Search, Plus, Shield, Mail, MoreVertical, Edit2, Trash2 } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const usersData = [{
  id: 1,
  name: "John Doe",
  email: "john.doe@corp.com",
  role: "Admin",
  status: "Active",
  lastActive: "2 hours ago",
  companies: 234,
  avatar: "JD"
}, {
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@corp.com",
  role: "Manager",
  status: "Active",
  lastActive: "5 hours ago",
  companies: 189,
  avatar: "JS"
}, {
  id: 3,
  name: "Mike Johnson",
  email: "mike.johnson@corp.com",
  role: "Sales Rep",
  status: "Active",
  lastActive: "1 day ago",
  companies: 145,
  avatar: "MJ"
}, {
  id: 4,
  name: "Sarah Williams",
  email: "sarah.williams@corp.com",
  role: "Sales Rep",
  status: "Active",
  lastActive: "3 hours ago",
  companies: 167,
  avatar: "SW"
}, {
  id: 5,
  name: "David Brown",
  email: "david.brown@corp.com",
  role: "Analyst",
  status: "Inactive",
  lastActive: "2 weeks ago",
  companies: 78,
  avatar: "DB"
}];
export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const filteredUsers = usersData.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h1", {
          className: "mb-2",
          children: "User Management"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-muted-foreground",
          children: "Manage team members and permissions"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsxDEV(Plus, {
          className: "w-5 h-5"
        }, void 0, false), "Add User"]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex-1 relative",
          children: [/*#__PURE__*/_jsxDEV(Search, {
            className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
            type: "text",
            placeholder: "Search users by name or email...",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            className: "w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("select", {
          value: selectedRole,
          onChange: e => setSelectedRole(e.target.value),
          className: "px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
          children: [/*#__PURE__*/_jsxDEV("option", {
            value: "all",
            children: "All Roles"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Admin",
            children: "Admin"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Manager",
            children: "Manager"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Sales Rep",
            children: "Sales Rep"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Analyst",
            children: "Analyst"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-2 gap-6",
      children: filteredUsers.map(user => /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-xl",
              children: user.avatar
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("h3", {
                className: "mb-1",
                children: user.name
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground mb-2",
                children: [/*#__PURE__*/_jsxDEV(Mail, {
                  className: "w-4 h-4"
                }, void 0, false), user.email]
              }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/_jsxDEV("span", {
                  className: `px-3 py-1 rounded-lg text-xs font-medium ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : user.role === 'Manager' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                  children: [/*#__PURE__*/_jsxDEV(Shield, {
                    className: "w-3 h-3 inline mr-1"
                  }, void 0, false), user.role]
                }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
                  className: `px-3 py-1 rounded-lg text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`,
                  children: user.status
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
            className: "p-2 hover:bg-muted rounded-lg transition-colors",
            children: /*#__PURE__*/_jsxDEV(MoreVertical, {
              className: "w-5 h-5 text-muted-foreground"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-4 pt-4 border-t border-border",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground mb-1",
              children: "Companies Managed"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "font-semibold",
              children: user.companies
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("p", {
              className: "text-sm text-muted-foreground mb-1",
              children: "Last Active"
            }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
              className: "font-semibold",
              children: user.lastActive
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-2 mt-4",
          children: [/*#__PURE__*/_jsxDEV("button", {
            className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm",
            children: [/*#__PURE__*/_jsxDEV(Edit2, {
              className: "w-4 h-4 inline mr-2"
            }, void 0, false), "Edit"]
          }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors text-sm",
            children: /*#__PURE__*/_jsxDEV(Trash2, {
              className: "w-4 h-4 inline"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, user.id, true))
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Role Permissions"
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/_jsxDEV("table", {
          className: "w-full",
          children: [/*#__PURE__*/_jsxDEV("thead", {
            className: "bg-muted/50 border-b border-border",
            children: /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("th", {
                className: "px-4 py-3 text-left font-medium",
                children: "Permission"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Admin"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Manager"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Sales Rep"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-4 py-3 text-center font-medium",
                children: "Analyst"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false), /*#__PURE__*/_jsxDEV("tbody", {
            className: "divide-y divide-border",
            children: [/*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "View Companies"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "Add/Edit Companies"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "Delete Companies"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "View Reports"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "Manage Users"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3",
                children: "System Settings"
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-green-500 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-4 py-3 text-center",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: "inline-block w-5 h-5 bg-gray-300 rounded-full"
                }, void 0, false)
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true)]
  }, void 0, true);
}
