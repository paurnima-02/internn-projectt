import { Building2, TrendingUp, Briefcase, Users, ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const kpiData = [{
  title: "Total Companies",
  value: "1,234",
  change: "+12.5%",
  trend: "up",
  icon: Building2,
  color: "bg-blue-500"
}, {
  title: "Active Prospects",
  value: "456",
  change: "+8.2%",
  trend: "up",
  icon: TrendingUp,
  color: "bg-green-500"
}, {
  title: "Hiring Companies",
  value: "89",
  change: "+23.1%",
  trend: "up",
  icon: Briefcase,
  color: "bg-purple-500"
}, {
  title: "Total HR Contacts",
  value: "2,567",
  change: "-3.2%",
  trend: "down",
  icon: Users,
  color: "bg-orange-500"
}];
const industryData = [{
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
const cityData = [{
  city: "Mumbai",
  companies: 345
}, {
  city: "Bangalore",
  companies: 298
}, {
  city: "Delhi",
  companies: 267
}, {
  city: "Pune",
  companies: 189
}, {
  city: "Hyderabad",
  companies: 156
}, {
  city: "Chennai",
  companies: 134
}];
const hiringTrendData = [{
  month: "Jan",
  companies: 45
}, {
  month: "Feb",
  companies: 52
}, {
  month: "Mar",
  companies: 48
}, {
  month: "Apr",
  companies: 61
}, {
  month: "May",
  companies: 73
}, {
  month: "Jun",
  companies: 89
}];
const recentActivity = [{
  company: "TechCorp Solutions",
  action: "Added to prospects",
  time: "2 hours ago",
  status: "new"
}, {
  company: "Global Finance Ltd",
  action: "Contact updated",
  time: "5 hours ago",
  status: "updated"
}, {
  company: "HealthCare Innovations",
  action: "Started hiring",
  time: "1 day ago",
  status: "hiring"
}, {
  company: "Manufacturing Pro",
  action: "Meeting scheduled",
  time: "1 day ago",
  status: "meeting"
}, {
  company: "Retail Giant Inc",
  action: "Proposal sent",
  time: "2 days ago",
  status: "proposal"
}];
export function Dashboard() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-8",
    children: [/*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "mb-2",
        children: "Dashboard"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-muted-foreground",
        children: "Welcome back! Here's your business overview."
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-4 gap-6",
      children: kpiData.map(kpi => /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: `${kpi.color} w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-10`,
            children: /*#__PURE__*/_jsxDEV(kpi.icon, {
              className: `w-6 h-6 ${kpi.color.replace('bg-', 'text-')}`
            }, void 0, false)
          }, void 0, false), kpi.trend === "up" ? /*#__PURE__*/_jsxDEV("span", {
            className: "flex items-center gap-1 text-sm text-green-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(ArrowUpRight, {
              className: "w-4 h-4"
            }, void 0, false), kpi.change]
          }, void 0, true) : /*#__PURE__*/_jsxDEV("span", {
            className: "flex items-center gap-1 text-sm text-red-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(ArrowDownRight, {
              className: "w-4 h-4"
            }, void 0, false), kpi.change]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: kpi.value
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: kpi.title
        }, void 0, false)]
      }, kpi.title, true))
    }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-2 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Companies by Industry"
        }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
          width: "100%",
          height: 280,
          children: /*#__PURE__*/_jsxDEV(PieChart, {
            children: [/*#__PURE__*/_jsxDEV(Pie, {
              data: industryData,
              cx: "50%",
              cy: "50%",
              labelLine: false,
              label: ({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`,
              outerRadius: 90,
              fill: "#8884d8",
              dataKey: "value",
              children: industryData.map((entry, index) => /*#__PURE__*/_jsxDEV(Cell, {
                fill: entry.color
              }, `cell-${index}`, false))
            }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Companies by City"
        }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
          width: "100%",
          height: 280,
          children: /*#__PURE__*/_jsxDEV(BarChart, {
            data: cityData,
            children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
              strokeDasharray: "3 3",
              stroke: "#e2e8f0"
            }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
              dataKey: "city",
              tick: {
                fontSize: 12
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
              tick: {
                fontSize: 12
              }
            }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
              dataKey: "companies",
              fill: "#1e40af",
              radius: [8, 8, 0, 0]
            }, void 0, false)]
          }, void 0, true)
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Hiring Activity Trend"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 300,
        children: /*#__PURE__*/_jsxDEV(LineChart, {
          data: hiringTrendData,
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
            dataKey: "companies",
            stroke: "#1e40af",
            strokeWidth: 3,
            dot: {
              fill: '#1e40af',
              r: 6
            },
            name: "Hiring Companies"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-3 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "col-span-2 bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Recent Activity"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-4",
          children: recentActivity.map((activity, index) => /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex-1",
              children: [/*#__PURE__*/_jsxDEV("p", {
                className: "font-medium",
                children: activity.company
              }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                className: "text-sm text-muted-foreground",
                children: activity.action
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-4",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: activity.time
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: `px-3 py-1 rounded-lg text-xs font-medium ${activity.status === 'new' ? 'bg-blue-100 text-blue-700' : activity.status === 'hiring' ? 'bg-green-100 text-green-700' : activity.status === 'updated' ? 'bg-purple-100 text-purple-700' : activity.status === 'meeting' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`,
                children: activity.status
              }, void 0, false)]
            }, void 0, true)]
          }, index, true))
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Quick Actions"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-3",
          children: [/*#__PURE__*/_jsxDEV("button", {
            className: "w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity",
            children: "Add New Company"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors",
            children: "Import Contacts"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
            className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors",
            children: "Generate Report"
          }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
  className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors",
  children: "Export Data"
}, void 0, false),

/*#__PURE__*/_jsxDEV("button", {
  className: "w-full px-4 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors",
  children: "Upload Data"
}, void 0, false)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "mt-6 p-4 bg-accent rounded-xl",
          children: [/*#__PURE__*/_jsxDEV("p", {
            className: "text-sm font-medium text-accent-foreground mb-1",
            children: "Pro Tip"
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-xs text-muted-foreground",
            children: "Use filters in the Companies page to quickly find hiring companies in your target industry."
          }, void 0, false)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}