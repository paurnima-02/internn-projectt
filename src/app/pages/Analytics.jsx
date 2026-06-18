import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown, Activity, Target } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const performanceData = [{
  week: "Week 1",
  outreach: 45,
  responses: 28,
  meetings: 12,
  conversions: 5
}, {
  week: "Week 2",
  outreach: 52,
  responses: 34,
  meetings: 15,
  conversions: 7
}, {
  week: "Week 3",
  outreach: 48,
  responses: 31,
  meetings: 14,
  conversions: 6
}, {
  week: "Week 4",
  outreach: 61,
  responses: 42,
  meetings: 19,
  conversions: 9
}];
const revenueForecast = [{
  month: "Jan",
  actual: 450,
  projected: 420,
  target: 500
}, {
  month: "Feb",
  actual: 520,
  projected: 490,
  target: 550
}, {
  month: "Mar",
  actual: 480,
  projected: 510,
  target: 550
}, {
  month: "Apr",
  actual: 610,
  projected: 580,
  target: 600
}, {
  month: "May",
  actual: 730,
  projected: 680,
  target: 700
}, {
  month: "Jun",
  actual: 0,
  projected: 820,
  target: 800
}];
const activityMetrics = [{
  day: "Mon",
  emails: 45,
  calls: 23,
  meetings: 8
}, {
  day: "Tue",
  emails: 52,
  calls: 28,
  meetings: 10
}, {
  day: "Wed",
  emails: 48,
  calls: 25,
  meetings: 9
}, {
  day: "Thu",
  emails: 61,
  calls: 31,
  meetings: 12
}, {
  day: "Fri",
  emails: 73,
  calls: 35,
  meetings: 14
}, {
  day: "Sat",
  emails: 12,
  calls: 5,
  meetings: 2
}, {
  day: "Sun",
  emails: 8,
  calls: 3,
  meetings: 1
}];
export function Analytics() {
  return /*#__PURE__*/_jsxDEV("div", {
    className: "space-y-6",
    children: [/*#__PURE__*/_jsxDEV("div", {
      children: [/*#__PURE__*/_jsxDEV("h1", {
        className: "mb-2",
        children: "Analytics"
      }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
        className: "text-muted-foreground",
        children: "Deep insights into your business performance"
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-4 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(Activity, {
              className: "w-6 h-6 text-blue-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1 text-sm text-green-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-4 h-4"
            }, void 0, false), "+15.3%"]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "87.5%"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: "Engagement Rate"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(Target, {
              className: "w-6 h-6 text-purple-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1 text-sm text-green-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-4 h-4"
            }, void 0, false), "+8.7%"]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "23.4%"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: "Conversion Rate"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-6 h-6 text-green-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1 text-sm text-green-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-4 h-4"
            }, void 0, false), "+12.1%"]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "₹2.4M"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: "Pipeline Value"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-start justify-between mb-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(Activity, {
              className: "w-6 h-6 text-orange-600"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center gap-1 text-sm text-red-600 font-medium",
            children: [/*#__PURE__*/_jsxDEV(TrendingDown, {
              className: "w-4 h-4"
            }, void 0, false), "-3.2%"]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("h3", {
          className: "text-3xl font-bold mb-1",
          children: "4.2 days"
        }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
          className: "text-sm text-muted-foreground",
          children: "Avg Response Time"
        }, void 0, false)]
      }, void 0, true)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Outreach Performance (Last 4 Weeks)"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/_jsxDEV(BarChart, {
          data: performanceData,
          children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
            strokeDasharray: "3 3",
            stroke: "#e2e8f0"
          }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
            dataKey: "week",
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Legend, {}, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "outreach",
            fill: "#3b82f6",
            name: "Outreach",
            radius: [8, 8, 0, 0]
          }, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "responses",
            fill: "#8b5cf6",
            name: "Responses",
            radius: [8, 8, 0, 0]
          }, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "meetings",
            fill: "#10b981",
            name: "Meetings",
            radius: [8, 8, 0, 0]
          }, void 0, false), /*#__PURE__*/_jsxDEV(Bar, {
            dataKey: "conversions",
            fill: "#f59e0b",
            name: "Conversions",
            radius: [8, 8, 0, 0]
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Revenue Forecast vs Actual"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 350,
        children: /*#__PURE__*/_jsxDEV(AreaChart, {
          data: revenueForecast,
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
          }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Legend, {}, void 0, false), /*#__PURE__*/_jsxDEV(Area, {
            type: "monotone",
            dataKey: "target",
            stroke: "#94a3b8",
            fill: "#e2e8f0",
            name: "Target",
            strokeWidth: 2
          }, void 0, false), /*#__PURE__*/_jsxDEV(Area, {
            type: "monotone",
            dataKey: "projected",
            stroke: "#8b5cf6",
            fill: "#ddd6fe",
            name: "Projected",
            strokeWidth: 2
          }, void 0, false), /*#__PURE__*/_jsxDEV(Area, {
            type: "monotone",
            dataKey: "actual",
            stroke: "#1e40af",
            fill: "#bfdbfe",
            name: "Actual",
            strokeWidth: 3
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "bg-card rounded-xl p-6 border border-border shadow-sm",
      children: [/*#__PURE__*/_jsxDEV("h3", {
        className: "mb-6",
        children: "Weekly Activity Breakdown"
      }, void 0, false), /*#__PURE__*/_jsxDEV(ResponsiveContainer, {
        width: "100%",
        height: 300,
        children: /*#__PURE__*/_jsxDEV(LineChart, {
          data: activityMetrics,
          children: [/*#__PURE__*/_jsxDEV(CartesianGrid, {
            strokeDasharray: "3 3",
            stroke: "#e2e8f0"
          }, void 0, false), /*#__PURE__*/_jsxDEV(XAxis, {
            dataKey: "day",
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(YAxis, {
            tick: {
              fontSize: 12
            }
          }, void 0, false), /*#__PURE__*/_jsxDEV(Tooltip, {}, void 0, false), /*#__PURE__*/_jsxDEV(Legend, {}, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "emails",
            stroke: "#3b82f6",
            strokeWidth: 3,
            dot: {
              fill: '#3b82f6',
              r: 5
            },
            name: "Emails Sent"
          }, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "calls",
            stroke: "#8b5cf6",
            strokeWidth: 3,
            dot: {
              fill: '#8b5cf6',
              r: 5
            },
            name: "Calls Made"
          }, void 0, false), /*#__PURE__*/_jsxDEV(Line, {
            type: "monotone",
            dataKey: "meetings",
            stroke: "#10b981",
            strokeWidth: 3,
            dot: {
              fill: '#10b981',
              r: 5
            },
            name: "Meetings Held"
          }, void 0, false)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "grid grid-cols-2 gap-6",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Response Time Analysis"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between mb-2",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "First Response"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "2.3 hours"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "w-full bg-muted rounded-full h-2",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "bg-green-500 h-2 rounded-full",
                style: {
                  width: '85%'
                }
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between mb-2",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "Follow-up Response"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "6.7 hours"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "w-full bg-muted rounded-full h-2",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "bg-blue-500 h-2 rounded-full",
                style: {
                  width: '72%'
                }
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center justify-between mb-2",
              children: [/*#__PURE__*/_jsxDEV("span", {
                className: "text-sm text-muted-foreground",
                children: "Average Overall"
              }, void 0, false), /*#__PURE__*/_jsxDEV("span", {
                className: "font-semibold",
                children: "4.2 days"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              className: "w-full bg-muted rounded-full h-2",
              children: /*#__PURE__*/_jsxDEV("div", {
                className: "bg-purple-500 h-2 rounded-full",
                style: {
                  width: '65%'
                }
              }, void 0, false)
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "bg-card rounded-xl p-6 border border-border shadow-sm",
        children: [/*#__PURE__*/_jsxDEV("h3", {
          className: "mb-6",
          children: "Team Performance"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between p-3 bg-muted/50 rounded-xl",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold",
                children: "JD"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: "John Doe"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs text-muted-foreground",
                  children: "45 conversions"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
              className: "text-green-600 font-semibold",
              children: "98%"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between p-3 bg-muted/50 rounded-xl",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold",
                children: "JS"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: "Jane Smith"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs text-muted-foreground",
                  children: "38 conversions"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
              className: "text-green-600 font-semibold",
              children: "94%"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
            className: "flex items-center justify-between p-3 bg-muted/50 rounded-xl",
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/_jsxDEV("div", {
                className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold",
                children: "MJ"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                children: [/*#__PURE__*/_jsxDEV("p", {
                  className: "font-medium",
                  children: "Mike Johnson"
                }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
                  className: "text-xs text-muted-foreground",
                  children: "32 conversions"
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("span", {
              className: "text-blue-600 font-semibold",
              children: "89%"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)]
    }, void 0, true)]
  }, void 0, true);
}
