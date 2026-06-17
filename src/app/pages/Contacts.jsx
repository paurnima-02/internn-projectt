import { useState } from "react";
import { Search, Filter, Download, Plus, Mail, Phone, Linkedin } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const contactsData = [{
  id: 1,
  name: "Priya Sharma",
  designation: "HR Manager",
  company: "TechCorp Solutions",
  email: "priya.sharma@techcorp.com",
  phone: "+91 98765 43210",
  city: "Mumbai",
  industry: "Technology",
  status: "Active"
}, {
  id: 2,
  name: "Rahul Verma",
  designation: "Talent Acquisition Lead",
  company: "Global Finance Ltd",
  email: "rahul.verma@globalfinance.com",
  phone: "+91 98765 43211",
  city: "Bangalore",
  industry: "Finance",
  status: "Active"
}, {
  id: 3,
  name: "Anjali Patel",
  designation: "HR Director",
  company: "HealthCare Innovations",
  email: "anjali.patel@healthcare.com",
  phone: "+91 98765 43212",
  city: "Delhi",
  industry: "Healthcare",
  status: "Active"
}, {
  id: 4,
  name: "Vikram Singh",
  designation: "Recruitment Manager",
  company: "Manufacturing Pro",
  email: "vikram.singh@mfgpro.com",
  phone: "+91 98765 43213",
  city: "Pune",
  industry: "Manufacturing",
  status: "Inactive"
}, {
  id: 5,
  name: "Sneha Kapoor",
  designation: "VP Human Resources",
  company: "Retail Giant Inc",
  email: "sneha.kapoor@retailgiant.com",
  phone: "+91 98765 43214",
  city: "Hyderabad",
  industry: "Retail",
  status: "Active"
}];
export function Contacts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const filteredContacts = contactsData.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "all" || contact.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h1", {
          className: "mb-2",
          children: "HR Contacts"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-muted-foreground",
          children: "Manage all your HR and recruitment contacts"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        className: "flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
        children: [/*#__PURE__*/_jsxDEV(Plus, {
          className: "w-5 h-5"
        }, void 0, false), "Add Contact"]
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
            placeholder: "Search contacts by name or company...",
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
      className: "grid grid-cols-3 gap-6",
      children: filteredContacts.map(contact => /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg",
            children: contact.name.split(' ').map(n => n[0]).join('')
          }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
            className: `px-3 py-1 rounded-lg text-xs font-medium ${contact.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`,
            children: contact.status
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "mb-1",
          children: contact.name
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground mb-1",
          children: contact.designation
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm font-medium text-primary mb-4",
          children: contact.company
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-2 mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2 text-sm",
            children: [/*#__PURE__*/_jsxDEV(Mail, {
              className: "w-4 h-4 text-muted-foreground"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "truncate",
              children: contact.email
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2 text-sm",
            children: [/*#__PURE__*/_jsxDEV(Phone, {
              className: "w-4 h-4 text-muted-foreground"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              children: contact.phone
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-2 pt-4 border-t border-border",
          children: [/*#__PURE__*/_jsxDEV("button", {
            className: "flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm",
            children: "View Profile"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors",
            children: /*#__PURE__*/_jsxDEV(Linkedin, {
              className: "w-4 h-4"
            }, void 0, false)
          }, void 0, false)]
        }, void 0, true)]
      }, contact.id, true))
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-center gap-2",
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
  }, void 0, true);
}
