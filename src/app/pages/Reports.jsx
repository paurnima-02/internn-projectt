import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { FileDown, FileText, TrendingUp, Building2, Users, Briefcase } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const industryDistribution = [{
  name: "Technology",
  value: 342,
  color: "#3b82f6"
}, {
  name: "Finance",
  value: 234,
  color: "#8b5cf6"
}, {
  name: "Healthcare",
  value: 198,
  color: "#10b981"
}, {
  name: "Manufacturing",
  value: 167,
  color: "#f59e0b"
}, {
  name: "Retail",
  value: 145,
  color: "#ef4444"
}, {
  name: "Other",
  value: 148,
  color: "#6b7280"
}];
const hiringTrends = [{
  month: "Jan",
  hiring: 45,
  active: 234,
  prospects: 156
}, {
  month: "Feb",
  hiring: 52,
  active: 245,
  prospects: 167
}, {
  month: "Mar",
  hiring: 48,
  active: 239,
  prospects: 178
}, {
  month: "Apr",
  hiring: 61,
  active: 256,
  prospects: 189
}, {
  month: "May",
  hiring: 73,
  active: 278,
  prospects: 145
}, {
  month: "Jun",
  hiring: 89,
  active: 298,
  prospects: 134
}];
const topCities = [{
  city: "Mumbai",
  companies: 345,
  contacts: 892
}, {
  city: "Bangalore",
  companies: 298,
  contacts: 756
}, {
  city: "Delhi",
  companies: 267,
  contacts: 634
}, {
  city: "Pune",
  companies: 189,
  contacts: 445
}, {
  city: "Hyderabad",
  companies: 156,
  contacts: 389
}, {
  city: "Chennai",
  companies: 134,
  contacts: 312
}];
const prospectRatings = [{
  rating: "A+",
  count: 145,
  color: "#8b5cf6"
}, {
  rating: "A",
  count: 234,
  color: "#3b82f6"
}, {
  rating: "B+",
  count: 189,
  color: "#10b981"
}, {
  rating: "B",
  count: 156,
  color: "#f59e0b"
}, {
  rating: "C",
  count: 98,
  color: "#ef4444"
}];
export function Reports() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/_jsxDEV("div", {
        children: [/*#__PURE__*/_jsxDEV("h1", {
          className: "mb-2",
          children: "Executive Reports"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-muted-foreground",
          children: "Comprehensive analytics and business intelligence"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl transition-colors",
          children: [/*#__PURE__*/_jsxDEV(FileDown, {
            className: "w-5 h-5"
          }, void 0, false), "Export PDF"]
        }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
          className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
          children: [/*#__PURE__*/_jsxDEV(FileText, {
            className: "w-5 h-5"
          }, void 0, false), "Export Excel"]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-4 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between mb-3",
          children: [/*#__PURE__*/_jsxDEV(Building2, {
            className: "w-8 h-8 opacity-80"
          }, void 0, false), /*#__PURE__*/_jsxDEV(TrendingUp, {
            className: "w-5 h-5"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "1,234"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-blue-100",
          children: "Total Companies"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between mb-3",
          children: [/*#__PURE__*/_jsxDEV(Users, {
            className: "w-8 h-8 opacity-80"
          }, void 0, false), /*#__PURE__*/_jsxDEV(TrendingUp, {
            className: "w-5 h-5"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "2,567"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-purple-100",
          children: "HR Contacts"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between mb-3",
          children: [/*#__PURE__*/_jsxDEV(Briefcase, {
            className: "w-8 h-8 opacity-80"
          }, void 0, false), /*#__PURE__*/_jsxDEV(TrendingUp, {
            className: "w-5 h-5"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "89"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-green-100",
          children: "Hiring Now"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center justify-between mb-3",
          children: [/*#__PURE__*/_jsxDEV(FileText, {
            className: "w-8 h-8 opacity-80"
          }, void 0, false), /*#__PURE__*/_jsxDEV(TrendingUp, {
            className: "w-5 h-5"
          }, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "456"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-orange-100",
          children: "Active Prospects"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-2 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Industry Distribution"
        }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
          width: "100%",
          height: 300,
          children: /*#__PURE__*/_jsxDEV(PieChart, {
            children: [/*#__PURE__*/_jsxDEV(Pie, {
              data: industryDistribution,
              cx: "50%",
              cy: "50%",
              labelLine: false,
              label: ({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`,
              outerRadius: 100,
              fill: "#8884d8",
              dataKey: "value",
              children: industryDistribution.map((entry, index) => /*#__PURE__*/_jsxDEV(Cell, {
                fill: entry.color
              }, `cell-${index}`, false))
            }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Prospect Ratings Distribution"
        }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
          width: "100%",
          height: 300,
          children: /*#__PURE__*/_jsxDEV(BarChart, {
            data: prospectRatings,
            children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
              strokeDasharray: "3 3",
              stroke: "#e2e8f0"
            }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
              dataKey: "rating",
              tick: {
                fontSize: 12
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
              tick: {
                fontSize: 12
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
              dataKey: "count",
              radius: [8, 8, 0, 0],
              children: prospectRatings.map((entry, index) => /*#__PURE__*/_jsxDEV(Cell, {
                fill: entry.color
              }, `cell-${index}`, false))
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Company Status Trends (6 Months)"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/_jsxDEV(LineChart, {
          data: hiringTrends,
          children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
            strokeDasharray: "3 3",
            stroke: "#e2e8f0"
          }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
            dataKey: "month",
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Legend, {}, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "hiring",
            stroke: "#10b981",
            strokeWidth: 3,
            dot: {
              fill: '#10b981',
              r: 6
            },
            name: "Hiring Companies"
          }, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "active",
            stroke: "#3b82f6",
            strokeWidth: 3,
            dot: {
              fill: '#3b82f6',
              r: 6
            },
            name: "Active Companies"
          }, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "prospects",
            stroke: "#f59e0b",
            strokeWidth: 3,
            dot: {
              fill: '#f59e0b',
              r: 6
            },
            name: "Prospects"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Top Cities Analysis"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 300,
        children: /*#__PURE__*/_jsxDEV(BarChart, {
          data: topCities,
          layout: "vertical",
          children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
            strokeDasharray: "3 3",
            stroke: "#e2e8f0"
          }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
            type: "number",
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
            dataKey: "city",
            type: "category",
            tick: {
              fontSize: 12
            },
            width: 80
          }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Legend, {}, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "companies",
            fill: "#1e40af",
            name: "Companies",
            radius: [0, 8, 8, 0]
          }, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "contacts",
            fill: "#8b5cf6",
            name: "Contacts",
            radius: [0, 8, 8, 0]
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h4", {
          className: "mb-4",
          children: "Conversion Metrics"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Prospect to Active"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-green-600",
              children: "67%"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Active to Hiring"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-blue-600",
              children: "34%"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Overall Success Rate"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-purple-600",
              children: "23%"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h4", {
          className: "mb-4",
          children: "Contact Metrics"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Avg Contacts/Company"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold",
              children: "2.08"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Response Rate"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-green-600",
              children: "78%"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Active Conversations"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold",
              children: "234"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h4", {
          className: "mb-4",
          children: "Growth Metrics"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "New Companies (Month)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-blue-600",
              children: "+45"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "New Contacts (Month)"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-purple-600",
              children: "+89"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/_jsxDEV("span", {
              className: "text-sm text-muted-foreground",
              children: "Month-over-Month"
            }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
              className: "font-semibold text-green-600",
              children: "+12.5%"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
