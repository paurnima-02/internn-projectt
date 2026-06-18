import { useParams, useNavigate } from "react-router";
import { Building2, MapPin, Users, Phone, Mail, Globe, FileText, Calendar, Edit, Trash2, ArrowLeft, Briefcase, Star } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function CompanyDetail() {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const company = {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    city: "Mumbai",
    state: "Maharashtra",
    address: "123 Tech Park, Andheri East, Mumbai",
    pincode: "400069",
    employees: "500-1000",
    status: "Hiring",
    rating: "A",
    gst: "27AABCT1234F1Z5",
    cin: "U12345MH2020PTC123456",
    phone: "+91 22 1234 5678",
    email: "contact@techcorp.com",
    website: "https://www.techcorp.com",
    founded: "2015",
    revenue: "₹50-100 Cr"
  };
  const hrContacts = [{
    name: "Priya Sharma",
    designation: "HR Manager",
    email: "priya.sharma@techcorp.com",
    phone: "+91 98765 43210",
    linkedIn: "https://linkedin.com/in/priyasharma"
  }, {
    name: "Rahul Verma",
    designation: "Talent Acquisition Lead",
    email: "rahul.verma@techcorp.com",
    phone: "+91 98765 43211",
    linkedIn: "https://linkedin.com/in/rahulverma"
  }];
  const timeline = [{
    date: "2024-05-28",
    action: "Status changed to Hiring",
    user: "John Doe"
  }, {
    date: "2024-05-25",
    action: "Added new HR contact",
    user: "Jane Smith"
  }, {
    date: "2024-05-20",
    action: "Meeting scheduled",
    user: "John Doe"
  }, {
    date: "2024-05-15",
    action: "Company added to system",
    user: "Admin"
  }];
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-4",
        children: [/*#__PURE__*/_jsxDEV("button", {
          onClick: () => navigate("/companies"),
          className: "p-2 hover:bg-muted rounded-xl transition-colors",
          children: /*#__PURE__*/_jsxDEV(ArrowLeft, {
            className: "w-5 h-5"
          }, void 0, false)
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          children: [/*#__PURE__*/_jsxDEV("h1", {
            className: "mb-1",
            children: company.name
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-muted-foreground",
            children: "Complete company profile and activity"
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: [/*#__PURE__*/_jsxDEV(Edit, {
            className: "w-4 h-4"
          }, void 0, false), "Edit"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground hover:opacity-90 rounded-xl transition-opacity",
          children: [/*#__PURE__*/_jsxDEV(Trash2, {
            className: "w-4 h-4"
          }, void 0, false), "Delete"]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "col-span-2 space-y-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-start justify-between mb-6",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center",
                children: /*#__PURE__*/_jsxDEV(Building2, {
                  className: "w-8 h-8 text-primary"
                }, void 0, false)
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("h2", {
                  className: "mb-1",
                  children: company.name
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-muted-foreground",
                  children: company.industry
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-2",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: `px-4 py-2 rounded-xl text-sm font-medium bg-green-100 text-green-700`,
                children: company.status
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: `px-4 py-2 rounded-xl text-sm font-medium bg-purple-100 text-purple-700`,
                children: ["Rating: ", company.rating]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "grid grid-cols-2 gap-6",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(MapPin, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Address"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: company.address
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground",
                  children: [company.city, ", ", company.state, " - ", company.pincode]
                }, void 0, true)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(Users, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Employee Strength"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: company.employees
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(Phone, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Phone"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: company.phone
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(Mail, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Email"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: company.email
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(Globe, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Website"
                }, void 0, false), /*#__PURE__*/_jsxDEV("a", {
                  href: company.website,
                  className: "font-medium text-primary hover:underline",
                  children: company.website
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-start gap-3",
              children: [/*#__PURE__*/_jsxDEV(Briefcase, {
                className: "w-5 h-5 text-muted-foreground mt-0.5"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Annual Revenue"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: company.revenue
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm",
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "mb-6",
            children: "Legal & Compliance Details"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "grid grid-cols-2 gap-6",
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "GST Number"
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "font-medium font-mono bg-muted px-4 py-2 rounded-lg",
                children: company.gst
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "CIN Number"
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "font-medium font-mono bg-muted px-4 py-2 rounded-lg",
                children: company.cin
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "Founded Year"
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "font-medium",
                children: company.founded
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-muted-foreground mb-2",
                children: "Company Type"
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "font-medium",
                children: "Private Limited"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between mb-6",
            children: [/*#__PURE__*/_jsxDEV("h3", {
              children: "HR Contacts"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm",
              children: "Add Contact"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "space-y-4",
            children: hrContacts.map((contact, index) => /*#__PURE__*/_jsxDEV("div", {
              className: "p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "flex items-start justify-between",
                children: [/*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-start gap-3",
                  children: [/*#__PURE__*/_jsxDEV("div", {
                    className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold",
                    children: contact.name.split(' ').map(n => n[0]).join('')
                  }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                    children: [/*#__PURE__*/_jsxDEV("p", {
                      className: "font-medium mb-1",
                      children: contact.name
                    }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                      className: "text-sm text-muted-foreground mb-2",
                      children: contact.designation
                    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                      className: "space-y-1",
                      children: [/*#__PURE__*/_jsxDEV("div", {
                        className: "flex items-center gap-2 text-sm",
                        children: [/*#__PURE__*/_jsxDEV(Mail, {
                          className: "w-4 h-4 text-muted-foreground"
                        }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
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
                    }, void 0, true)]
                  }, void 0, true)]
                }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
                  className: "p-2 hover:bg-muted rounded-lg transition-colors",
                  children: /*#__PURE__*/_jsxDEV(Edit, {
                    className: "w-4 h-4 text-muted-foreground"
                  }, void 0, false)
                }, void 0, false)]
              }, void 0, true)
            }, index, false))
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm",
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "mb-4",
            children: "Notes & Comments"
          }, void 0, false), /*#__PURE__*/_jsxDEV("textarea", {
            className: "w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none",
            rows: 4,
            placeholder: "Add notes about this company...",
            defaultValue: "High potential client. Currently looking to expand their tech team. Follow up scheduled for next week."
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-end gap-3 mt-4",
            children: [/*#__PURE__*/_jsxDEV("button", {
              className: "px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors text-sm",
              children: "Cancel"
            }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
              className: "px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity text-sm",
              children: "Save Note"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "space-y-6",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "bg-card rounded-xl p-6 border border-border shadow-sm",
          children: [/*#__PURE__*/_jsxDEV("h3", {
            className: "mb-6",
            children: "Activity Timeline"
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "space-y-6",
            children: timeline.map((item, index) => /*#__PURE__*/_jsxDEV("div", {
              className: "relative pl-6",
              children: [index !== timeline.length - 1 && /*#__PURE__*/_jsxDEV("div", {
                className: "absolute left-2 top-6 bottom-0 w-0.5 bg-border"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-2 border-card"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium text-sm mb-1",
                  children: item.action
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs text-muted-foreground mb-1",
                  children: ["by ", item.user]
                }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
                  className: "flex items-center gap-1 text-xs text-muted-foreground",
                  children: [/*#__PURE__*/_jsxDEV(Calendar, {
                    className: "w-3 h-3"
                  }, void 0, false), new Date(item.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })]
                }, void 0, true)]
              }, void 0, true)]
            }, index, true))
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-xl p-6 border border-primary/20",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-2 mb-3",
            children: [/*#__PURE__*/_jsxDEV(Star, {
              className: "w-5 h-5 text-primary"
            }, void 0, false), /*#__PURE__*/_jsxDEV("h4", {
              className: "font-semibold",
              children: "Quick Stats"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "space-y-3",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "Total Interactions"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "24"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "Last Contact"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "2 days ago"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "Next Follow-up"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "Jun 5, 2026"
              }, void 0, false)]
            }, void 0, true)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
