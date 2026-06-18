import { useState } from "react";
import { useNavigate } from "react-router";
import { Save, X, Building2 } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function AddCompany() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    city: "",
    address: "",
    pincode: "",
    state: "",
    gst: "",
    cin: "",
    website: "",
    employees: "",
    phone: "",
    email: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    hrLinkedIn: "",
    rating: "B",
    status: "Prospect",
    notes: ""
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/companies");
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "max-w-5xl",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between mb-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h1", {
          className: "mb-2",
          children: "Add New Company"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-muted-foreground",
          children: "Fill in the company details and contact information"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
        onClick: () => navigate("/companies"),
        className: "flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
        children: [/*#__PURE__*/_jsxDEV(X, {
          className: "w-5 h-5"
        }, void 0, false), "Cancel"]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("form", {
      onSubmit: handleSubmit,
      className: "space-y-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3 mb-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(Building2, {
              className: "w-5 h-5 text-primary"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("h3", {
            children: "Company Information"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "companyName",
              className: "block mb-2",
              children: ["Company Name ", /*#__PURE__*/_jsxDEV("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "companyName",
              name: "companyName",
              value: formData.companyName,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter company name"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "industry",
              className: "block mb-2",
              children: ["Industry ", /*#__PURE__*/_jsxDEV("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("select", {
              id: "industry",
              name: "industry",
              value: formData.industry,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "",
                children: "Select industry"
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
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Education",
                children: "Education"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Construction",
                children: "Construction"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "F&B",
                children: "Food & Beverage"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "city",
              className: "block mb-2",
              children: ["City ", /*#__PURE__*/_jsxDEV("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "city",
              name: "city",
              value: formData.city,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter city"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "state",
              className: "block mb-2",
              children: ["State ", /*#__PURE__*/_jsxDEV("span", {
                className: "text-destructive",
                children: "*"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "state",
              name: "state",
              value: formData.state,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter state"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "address",
              className: "block mb-2",
              children: "Address"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "address",
              name: "address",
              value: formData.address,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter full address"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "pincode",
              className: "block mb-2",
              children: "Pincode"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "pincode",
              name: "pincode",
              value: formData.pincode,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter pincode"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "employees",
              className: "block mb-2",
              children: "Employee Strength"
            }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
              id: "employees",
              name: "employees",
              value: formData.employees,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "",
                children: "Select range"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "1-50",
                children: "1-50"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "51-100",
                children: "51-100"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "101-500",
                children: "101-500"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "501-1000",
                children: "501-1000"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "1001-5000",
                children: "1001-5000"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "5000+",
                children: "5000+"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "GST & CIN Details"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "gst",
              className: "block mb-2",
              children: "GST Number"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "gst",
              name: "gst",
              value: formData.gst,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "27AABCT1234F1Z5"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "cin",
              className: "block mb-2",
              children: "CIN Number"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "cin",
              name: "cin",
              value: formData.cin,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "U12345MH2020PTC123456"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Contact Information"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "phone",
              className: "block mb-2",
              children: "Phone Number"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "tel",
              id: "phone",
              name: "phone",
              value: formData.phone,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "+91 98765 43210"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "email",
              className: "block mb-2",
              children: "Email Address"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "email",
              id: "email",
              name: "email",
              value: formData.email,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "contact@company.com"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "website",
              className: "block mb-2",
              children: "Website"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "url",
              id: "website",
              name: "website",
              value: formData.website,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "https://www.company.com"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "HR Contact Details"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "hrName",
              className: "block mb-2",
              children: "HR Name"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "text",
              id: "hrName",
              name: "hrName",
              value: formData.hrName,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "Enter HR contact name"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "hrEmail",
              className: "block mb-2",
              children: "HR Email"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "email",
              id: "hrEmail",
              name: "hrEmail",
              value: formData.hrEmail,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "hr@company.com"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "hrPhone",
              className: "block mb-2",
              children: "HR Phone"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "tel",
              id: "hrPhone",
              name: "hrPhone",
              value: formData.hrPhone,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "+91 98765 43210"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "hrLinkedIn",
              className: "block mb-2",
              children: "HR LinkedIn"
            }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
              type: "url",
              id: "hrLinkedIn",
              name: "hrLinkedIn",
              value: formData.hrLinkedIn,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              placeholder: "https://linkedin.com/in/..."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Prospect Information"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "grid grid-cols-2 gap-6",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "rating",
              className: "block mb-2",
              children: "Prospect Rating"
            }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
              id: "rating",
              name: "rating",
              value: formData.rating,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "A+",
                children: "A+ (Top Priority)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "A",
                children: "A (High Priority)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "B+",
                children: "B+ (Medium-High)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "B",
                children: "B (Medium)"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "C",
                children: "C (Low Priority)"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "status",
              className: "block mb-2",
              children: "Status"
            }, void 0, false), /*#__PURE__*/_jsxDEV("select", {
              id: "status",
              name: "status",
              value: formData.status,
              onChange: handleChange,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20",
              children: [/*#__PURE__*/_jsxDEV("option", {
                value: "Prospect",
                children: "Prospect"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Active",
                children: "Active"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Hiring",
                children: "Hiring"
              }, void 0, false), /*#__PURE__*/_jsxDEV("option", {
                value: "Inactive",
                children: "Inactive"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "col-span-2",
            children: [/*#__PURE__*/_jsxDEV("label", {
              htmlFor: "notes",
              className: "block mb-2",
              children: "Notes"
            }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
              id: "notes",
              name: "notes",
              value: formData.notes,
              onChange: handleChange,
              rows: 4,
              className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none",
              placeholder: "Add any additional notes or comments..."
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsxDEV("button", {
          type: "submit",
          className: "flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
          children: [/*#__PURE__*/_jsxDEV(Save, {
            className: "w-5 h-5"
          }, void 0, false), "Save Company"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          type: "button",
          onClick: () => navigate("/companies"),
          className: "px-8 py-3 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: "Cancel"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
