import { useState } from "react";
import {
  Megaphone,
  Mail,
  MessageCircle,
  Smartphone,
  Users,
  Send,
  Plus,
  ChevronDown,
  Filter,
  Clock,
  Eye,
  Reply,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// ---- Mock data — replace with real data from your Companies/Contacts context or API ----

const stats = [
  { label: "Campaigns Sent", value: "128", change: "+14.2%", up: true, icon: Send, bg: "bg-blue-500" },
  { label: "Avg. Open Rate", value: "42.8%", change: "+3.1%", up: true, icon: Eye, bg: "bg-green-500" },
  { label: "Avg. Reply Rate", value: "9.6%", change: "+1.4%", up: true, icon: Reply, bg: "bg-purple-500" },
  { label: "Saved Segments", value: "17", change: "-1.0%", up: false, icon: Filter, bg: "bg-orange-500" },
];

const channels = [
  { id: "email", label: "Email", icon: Mail },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "sms", label: "SMS", icon: Smartphone },
];

const segmentFilters = {
  industry: ["Technology", "Finance", "Healthcare", "Retail", "Manufacturing"],
  city: ["Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad"],
  status: ["Active Prospect", "Hiring Company", "Client", "Inactive"],
};

const campaigns = [
  { name: "Q3 Tech Prospect Outreach", channel: "email", audience: "Technology · Mumbai", status: "Sent", sent: 340, opened: 178, replied: 22 },
  { name: "Hiring Companies Follow-up", channel: "whatsapp", audience: "Hiring Companies", status: "Scheduled", sent: 0, opened: 0, replied: 0 },
  { name: "Finance Sector Intro", channel: "email", audience: "Finance · Pan India", status: "Draft", sent: 0, opened: 0, replied: 0 },
  { name: "Re-engagement Blast", channel: "sms", audience: "Inactive · 90 days+", status: "Sent", sent: 512, opened: 201, replied: 14 },
];

const channelIcon = { email: Mail, whatsapp: MessageCircle, sms: Smartphone };

export function Marketing() {
  const { darkMode } = useTheme();
  const [activeChannel, setActiveChannel] = useState("email");
  const [selectedFilters, setSelectedFilters] = useState({ industry: null, city: null, status: null });

  const toggleFilter = (group, value) => {
    setSelectedFilters((prev) => ({ ...prev, [group]: prev[group] === value ? null : value }));
  };

  const statusStyles = darkMode
    ? { Sent: "bg-emerald-900/30 text-emerald-400", Scheduled: "bg-purple-900/30 text-purple-300", Draft: "bg-gray-800 text-gray-400" }
    : { Sent: "bg-green-100 text-green-700", Scheduled: "bg-purple-100 text-purple-700", Draft: "bg-gray-100 text-gray-600" };

  const cardBase = darkMode ? "bg-[#0f1421] border border-gray-800" : "bg-white shadow-sm";
  const inputBase = darkMode
    ? "bg-[#0a0e1a] border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
    : "border border-gray-200 focus:border-blue-400";
  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Megaphone className="h-6 w-6 text-blue-500" />
            <h1 className={`text-3xl font-bold ${textPrimary}`}>Marketing</h1>
          </div>
          <p className={`mt-1 ${textSecondary}`}>
            Reach any company or contact in your database, across email, WhatsApp, and SMS.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 font-medium text-white shadow-lg shadow-blue-600/30 transition hover:opacity-90">
          <Plus className="h-4 w-4" />
          New campaign
        </button>
      </div>

      {/* Stat cards */}
      <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-2xl p-6 ${cardBase}`}>
            <div className="flex items-center justify-between">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.bg}`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <span className={`text-sm font-medium ${s.up ? "text-emerald-500" : "text-red-500"}`}>{s.change}</span>
            </div>
            <p className={`mt-4 text-3xl font-bold ${textPrimary}`}>{s.value}</p>
            <p className={`text-sm ${textSecondary}`}>{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Audience segmentation */}
        <div className={`rounded-2xl p-6 lg:col-span-1 ${cardBase}`}>
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            <h2 className={`text-lg font-semibold ${textPrimary}`}>Audience</h2>
          </div>

          {Object.entries(segmentFilters).map(([group, options]) => (
            <div key={group} className="mb-5">
              <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => {
                  const active = selectedFilters[group] === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => toggleFilter(group, opt)}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/30"
                          : darkMode
                          ? "bg-[#1a1f2e] text-gray-400 hover:bg-[#232a3d]"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            className={`mt-2 w-full rounded-xl py-2.5 text-sm font-semibold transition ${
              darkMode
                ? "border border-blue-900 bg-blue-950/40 text-blue-400 hover:bg-blue-950/70"
                : "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`}
          >
            Save as segment
          </button>
        </div>

        {/* Compose panel */}
        <div className={`rounded-2xl p-6 lg:col-span-2 ${cardBase}`}>
          <div className="mb-4 flex items-center justify-between">
            <h2 className={`text-lg font-semibold ${textPrimary}`}>Compose</h2>
            <div className={`flex rounded-xl p-1 ${darkMode ? "bg-[#1a1f2e]" : "bg-gray-100"}`}>
              {channels.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveChannel(c.id)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    activeChannel === c.id
                      ? darkMode
                        ? "bg-[#0f1421] text-blue-400 shadow-sm"
                        : "bg-white text-blue-700 shadow-sm"
                      : `${textSecondary} hover:${textPrimary}`
                  }`}
                >
                  <c.icon className="h-4 w-4" />
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            placeholder="Campaign name"
            className={`mb-3 w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none ${inputBase}`}
          />

          {activeChannel === "email" && (
            <input
              type="text"
              placeholder="Subject line"
              className={`mb-3 w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none ${inputBase}`}
            />
          )}

          <textarea
            rows={6}
            placeholder={`Write your ${activeChannel === "email" ? "email" : "message"}... use {{company_name}} and {{contact_name}} to personalize`}
            className={`mb-4 w-full resize-none rounded-xl px-4 py-3 text-sm focus:outline-none ${inputBase}`}
          />

          <div className="flex items-center justify-between">
            <button className={`flex items-center gap-1.5 text-sm font-medium ${textSecondary} hover:${textPrimary}`}>
              <Clock className="h-4 w-4" />
              Schedule for later
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="flex gap-2">
              <button
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  darkMode ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Save draft
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90">
                <Send className="h-4 w-4" />
                Send campaign
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign history */}
      <div className={`mt-6 rounded-2xl p-6 ${cardBase}`}>
        <h2 className={`mb-4 text-lg font-semibold ${textPrimary}`}>Recent campaigns</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className={`border-b ${darkMode ? "border-gray-800 text-gray-500" : "border-gray-100 text-gray-400"}`}>
                <th className="pb-3 font-medium">Campaign</th>
                <th className="pb-3 font-medium">Channel</th>
                <th className="pb-3 font-medium">Audience</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Sent</th>
                <th className="pb-3 font-medium">Opened</th>
                <th className="pb-3 font-medium">Replied</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => {
                const Icon = channelIcon[c.channel];
                return (
                  <tr key={c.name} className={`border-b last:border-0 ${darkMode ? "border-gray-800/60" : "border-gray-50"}`}>
                    <td className={`py-3.5 font-medium ${textPrimary}`}>{c.name}</td>
                    <td className="py-3.5">
                      <Icon className={`h-4 w-4 ${textSecondary}`} />
                    </td>
                    <td className={`py-3.5 ${textSecondary}`}>{c.audience}</td>
                    <td className="py-3.5">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[c.status]}`}>
                        {c.status}
                      </span>
                    </td>
                    <td className={`py-3.5 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{c.sent || "—"}</td>
                    <td className={`py-3.5 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{c.opened || "—"}</td>
                    <td className={`py-3.5 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{c.replied || "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
