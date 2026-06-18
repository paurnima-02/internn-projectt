import { useState } from "react";
import { Link } from "react-router";
import { Search, Filter, Download, Plus, MoreVertical, Eye, Edit2, Trash2 } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const companiesData = [{
  id: 1,
  name: "TechCorp Solutions",
  industry: "Technology",
  city: "Mumbai",
  employees: "500-1000",
  status: "Hiring",
  contacts: 5,
  rating: "A",
  gst: "27AABCT1234F1Z5"
}, {
  id: 2,
  name: "Global Finance Ltd",
  industry: "Finance",
  city: "Bangalore",
  employees: "1000-5000",
  status: "Active",
  contacts: 8,
  rating: "A+",
  gst: "29AABCT5678G2Z1"
}, {
  id: 3,
  name: "HealthCare Innovations",
  industry: "Healthcare",
  city: "Delhi",
  employees: "100-500",
  status: "Prospect",
  contacts: 3,
  rating: "B+",
  gst: "07AABCT9012H3Z7"
}, {
  id: 4,
  name: "Manufacturing Pro",
  industry: "Manufacturing",
  city: "Pune",
  employees: "500-1000",
  status: "Active",
  contacts: 6,
  rating: "A",
  gst: "27AABCT3456I4Z3"
}, {
  id: 5,
  name: "Retail Giant Inc",
  industry: "Retail",
  city: "Hyderabad",
  employees: "5000+",
  status: "Hiring",
  contacts: 12,
  rating: "A+",
  gst: "36AABCT7890J5Z9"
}, {
  id: 6,
  name: "Education Excellence",
  industry: "Education",
  city: "Chennai",
  employees: "100-500",
  status: "Prospect",
  contacts: 2,
  rating: "B",
  gst: "33AABCT2345K6Z4"
}, {
  id: 7,
  name: "Construction Leaders",
  industry: "Construction",
  city: "Mumbai",
  employees: "1000-5000",
  status: "Active",
  contacts: 7,
  rating: "A",
  gst: "27AABCT6789L7Z0"
}, {
  id: 8,
  name: "Food & Beverage Co",
  industry: "F&B",
  city: "Bangalore",
  employees: "500-1000",
  status: "Hiring",
  contacts: 4,
  rating: "B+",
  gst: "29AABCT0123M8Z6"
}];
export function Companies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const filteredCompanies = companiesData.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || company.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || company.industry === selectedIndustry;
    const matchesStatus = selectedStatus === "all" || company.status === selectedStatus;
    return matchesSearch && matchesIndustry && matchesStatus;
  });
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h1", {
          className: "mb-2",
          children: "Companies"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-muted-foreground",
          children: "Manage and track all your corporate prospects"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV(Link, {
        to: "/companies/add",
        className: "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsxDEV(Plus, {
          className: "w-5 h-5"
        }, void 0, false), "Add Company"]
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
            placeholder: "Search companies by name or city...",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
            className: "w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("select", {
          value: selectedIndustry,
          onChange: e => setSelectedIndustry(e.target.value),
          className: "px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
          children: [/*#__PURE__*/_jsxDEV("option", {
            value: "all",
            children: "All Industries"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Technology",
            children: "Technology"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Finance",
            children: "Finance"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Healthcare",
            children: "Healthcare"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Manufacturing",
            children: "Manufacturing"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Retail",
            children: "Retail"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("select", {
          value: selectedStatus,
          onChange: e => setSelectedStatus(e.target.value),
          className: "px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
          children: [/*#__PURE__*/_jsxDEV("option", {
            value: "all",
            children: "All Status"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Hiring",
            children: "Hiring"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Active",
            children: "Active"
          }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
            value: "Prospect",
            children: "Prospect"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: [/*#__PURE__*/_jsxDEV(Filter, {
            className: "w-5 h-5"
          }, void 0, false), "More Filters"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: [/*#__PURE__*/_jsxDEV(Download, {
            className: "w-5 h-5"
          }, void 0, false), "Export"]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl border border-border shadow-sm overflow-hidden",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/_jsxDEV("table", {
          className: "w-full",
          children: [/*#__PURE__*/_jsxDEV("thead", {
            className: "bg-muted/50 border-b border-border",
            children: /*#__PURE__*/_jsxDEV("tr", {
              children: [/*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Company Name"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Industry"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "City"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Employees"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Status"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Contacts"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Rating"
              }, void 0, false), /*#__PURE__*/_jsxDEV("th", {
                className: "px-6 py-4 text-left font-medium",
                children: "Actions"
              }, void 0, false)]
            }, void 0, true)
          }, void 0, false), /*#__PURE__*/_jsxDEV("tbody", {
            className: "divide-y divide-border",
            children: filteredCompanies.map(company => /*#__PURE__*/_jsxDEV("tr", {
              className: "hover:bg-muted/30 transition-colors",
              children: [/*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/_jsxDEV("div", {
                  children: [/*#__PURE__*/_jsxDEV("p", {
                    className: "font-medium",
                    children: company.name
                  }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                    className: "text-sm text-muted-foreground",
                    children: company.gst
                  }, void 0, false)]
                }, void 0, true)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4 text-muted-foreground",
                children: company.industry
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4 text-muted-foreground",
                children: company.city
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4 text-muted-foreground",
                children: company.employees
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: `px-3 py-1 rounded-lg text-xs font-medium ${company.status === 'Hiring' ? 'bg-green-100 text-green-700' : company.status === 'Active' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`,
                  children: company.status
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4 text-muted-foreground",
                children: company.contacts
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/_jsxDEV("span", {
                  className: `px-3 py-1 rounded-lg text-xs font-medium ${company.rating.includes('A+') ? 'bg-purple-100 text-purple-700' : company.rating.includes('A') ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`,
                  children: company.rating
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center gap-2",
                  children: [/*#__PURE__*/_jsxDEV(Link, {
                    to: `/companies/${company.id}`,
                    className: "p-2 hover:bg-muted rounded-lg transition-colors",
                    title: "View Details",
                    children: /*#__PURE__*/_jsxDEV(Eye, {
                      className: "w-4 h-4 text-muted-foreground"
                    }, void 0, false)
                  }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                    className: "p-2 hover:bg-muted rounded-lg transition-colors",
                    title: "Edit",
                    children: /*#__PURE__*/_jsxDEV(Edit2, {
                      className: "w-4 h-4 text-muted-foreground"
                    }, void 0, false)
                  }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                    className: "p-2 hover:bg-muted rounded-lg transition-colors",
                    title: "More",
                    children: /*#__PURE__*/_jsxDEV(MoreVertical, {
                      className: "w-4 h-4 text-muted-foreground"
                    }, void 0, false)
                  }, void 0, false)]
                }, void 0, true)
              }, void 0, false)]
            }, company.id, true))
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center justify-between px-6 py-4 border-t border-border",
        children: [/*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: ["Showing ", /*#__PURE__*/_jsxDEV("span", {
            className: "font-medium",
            children: filteredCompanies.length
          }, void 0, false), " of", " ", /*#__PURE__*/_jsxDEV("span", {
            className: "font-medium",
            children: companiesData.length
          }, void 0, false), " companies"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",
            children: "Previous"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg",
            children: "1"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",
            children: "2"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",
            children: "3"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",
            children: "Next"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
