import { useState } from "react";
import {
  Database as DatabaseIcon,
  Search,
  Sparkles,
  Download,
  UploadCloud,
  CheckCircle2,
  Loader2,
  FileSpreadsheet,
  Building2,
  Users,
  Brush,
  Copy,
  AlertTriangle,
  Type,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// ---- Mock data — replace with real API/AI responses later ----

const mockPreviewResults = [
  { name: "Nimbus Cloud Systems", industry: "Technology", city: "Mumbai", employees: 120 },
  { name: "Vertex Analytics Pvt Ltd", industry: "Technology", city: "Mumbai", employees: 85 },
  { name: "Orbit Data Labs", industry: "Technology", city: "Mumbai", employees: 64 },
];

const exportSets = [
  { id: "companies", label: "All Companies", icon: Building2, count: 1234 },
  { id: "contacts", label: "All HR Contacts", icon: Users, count: 2567 },
  { id: "prospects", label: "Active Prospects", icon: Sparkles, count: 456 },
];

const cleaningIssues = [
  {
    id: "dup",
    icon: Copy,
    title: "Duplicate records",
    detail: "14 companies appear more than once, likely from repeated imports.",
    count: 14,
  },
  {
    id: "missing",
    icon: AlertTriangle,
    title: "Missing fields",
    detail: "31 records are missing a city or industry value.",
    count: 31,
  },
  {
    id: "format",
    icon: Type,
    title: "Inconsistent formatting",
    detail: "22 phone numbers and 9 company names have inconsistent casing or spacing.",
    count: 22,
  },
];

export function Database() {
  const { darkMode } = useTheme();
  const [tab, setTab] = useState("import");

  // Import flow state
  const [prompt, setPrompt] = useState("");
  const [stage, setStage] = useState("idle"); // idle | searching | preview | cleaning | done
  const [results, setResults] = useState([]);

  // Export flow state
  const [exportSet, setExportSet] = useState("companies");
  const [exportFormat, setExportFormat] = useState("csv");

  // Cleaning flow state
  const [fixedIds, setFixedIds] = useState([]);
  const [runningAll, setRunningAll] = useState(false);

  const cardBase = darkMode ? "bg-[#0f1421] border border-gray-800" : "bg-white shadow-sm";
  const inputBase = darkMode
    ? "bg-[#0a0e1a] border border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
    : "border border-gray-200 focus:border-blue-400";
  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-500";

  const totalIssues = cleaningIssues
    .filter((i) => !fixedIds.includes(i.id))
    .reduce((sum, i) => sum + i.count, 0);

  const runSearch = () => {
    if (!prompt.trim()) return;
    setStage("searching");
    setTimeout(() => {
      setResults(mockPreviewResults);
      setStage("preview");
    }, 900);
  };

  const confirmImport = () => {
    setStage("cleaning");
    setTimeout(() => setStage("done"), 900);
  };

  const resetImport = () => {
    setPrompt("");
    setResults([]);
    setStage("idle");
  };

  const fixIssue = (id) => setFixedIds((prev) => [...prev, id]);

  const runAllCleaning = () => {
    setRunningAll(true);
    setTimeout(() => {
      setFixedIds(cleaningIssues.map((i) => i.id));
      setRunningAll(false);
    }, 1200);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <DatabaseIcon className="h-6 w-6 text-blue-500" />
            <h1 className={`text-3xl font-bold ${textPrimary}`}>Database</h1>
          </div>
          <p className={`mt-1 ${textSecondary}`}>
            Bring new company data in, or export what you already have.
          </p>
        </div>

        {/* Data cleaning quick-access card */}
        <button
          onClick={() => setTab("clean")}
          className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
            tab === "clean"
              ? "border-2 border-blue-500 bg-blue-500/5"
              : darkMode
              ? "border border-gray-800 bg-[#0f1421] hover:border-gray-700"
              : "border border-gray-100 bg-white shadow-sm hover:border-gray-200"
          }`}
        >
          <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${totalIssues > 0 ? "bg-amber-500" : "bg-emerald-500"}`}>
            <Brush className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className={`text-sm font-semibold ${textPrimary}`}>Data cleaning</p>
            <p className={`text-xs ${totalIssues > 0 ? (darkMode ? "text-amber-400" : "text-amber-600") : (darkMode ? "text-emerald-400" : "text-emerald-600")}`}>
              {totalIssues > 0 ? `${totalIssues} issues found` : "All clean"}
            </p>
          </div>
          <ChevronRight className={`h-4 w-4 ${textSecondary}`} />
        </button>
      </div>

      {/* Tabs */}
      <div className={`mb-6 inline-flex rounded-xl p-1 ${darkMode ? "bg-[#1a1f2e]" : "bg-gray-100"}`}>
        {[
          { id: "import", label: "Import", icon: UploadCloud },
          { id: "export", label: "Export", icon: Download },
          { id: "clean", label: "Cleaning", icon: Brush },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition ${
              tab === t.id
                ? darkMode
                  ? "bg-[#0f1421] text-blue-400 shadow-sm"
                  : "bg-white text-blue-700 shadow-sm"
                : `${textSecondary}`
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      {tab === "import" && (
        <div className={`rounded-2xl p-6 ${cardBase}`}>
          <div className="mb-1 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <h2 className={`text-lg font-semibold ${textPrimary}`}>Find and add data</h2>
          </div>
          <p className={`mb-4 text-sm ${textSecondary}`}>
            Describe the companies or contacts you're looking for, review the results, then add them to your database.
          </p>

          <div className="mb-5 flex gap-2">
            <div className="relative flex-1">
              <Search className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${textSecondary}`} />
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runSearch()}
                placeholder="e.g. Technology companies in Mumbai with 50-200 employees"
                className={`w-full rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none ${inputBase}`}
              />
            </div>
            <button
              onClick={runSearch}
              disabled={stage === "searching"}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90 disabled:opacity-60"
            >
              {stage === "searching" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
              {stage === "searching" ? "Searching" : "Search"}
            </button>
          </div>

          {stage === "preview" && (
            <>
              <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                {results.length} matches found — review before adding
              </p>
              <div className={`mb-4 overflow-hidden rounded-xl border ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className={darkMode ? "bg-[#1a1f2e]" : "bg-gray-50"}>
                      <th className={`px-4 py-2.5 font-medium ${textSecondary}`}>Company</th>
                      <th className={`px-4 py-2.5 font-medium ${textSecondary}`}>Industry</th>
                      <th className={`px-4 py-2.5 font-medium ${textSecondary}`}>City</th>
                      <th className={`px-4 py-2.5 font-medium ${textSecondary}`}>Employees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r) => (
                      <tr key={r.name} className={`border-t ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
                        <td className={`px-4 py-2.5 font-medium ${textPrimary}`}>{r.name}</td>
                        <td className={`px-4 py-2.5 ${textSecondary}`}>{r.industry}</td>
                        <td className={`px-4 py-2.5 ${textSecondary}`}>{r.city}</td>
                        <td className={`px-4 py-2.5 ${textSecondary}`}>{r.employees}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={confirmImport}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Add {results.length} to database
                </button>
                <button
                  onClick={resetImport}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    darkMode ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]" : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Discard
                </button>
              </div>
            </>
          )}

          {stage === "cleaning" && (
            <div className={`flex items-center gap-2 text-sm ${textSecondary}`}>
              <Loader2 className="h-4 w-4 animate-spin" />
              Cleaning and de-duplicating records...
            </div>
          )}

          {stage === "done" && (
            <div className={`flex items-center justify-between rounded-xl p-4 ${darkMode ? "bg-emerald-950/40 border border-emerald-900" : "bg-emerald-50 border border-emerald-100"}`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className={`text-sm font-medium ${darkMode ? "text-emerald-400" : "text-emerald-700"}`}>
                  {results.length} companies added and cleaned.
                </p>
              </div>
              <button onClick={resetImport} className="text-sm font-medium text-blue-500 hover:underline">
                Start another import
              </button>
            </div>
          )}

          <div className={`mt-6 border-t pt-5 ${darkMode ? "border-gray-800" : "border-gray-100"}`}>
            <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              Or upload a file
            </p>
            <label
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-8 text-sm transition ${
                darkMode ? "border-gray-700 text-gray-400 hover:border-blue-600" : "border-gray-200 text-gray-500 hover:border-blue-300"
              }`}
            >
              <FileSpreadsheet className="h-6 w-6" />
              Drop a CSV or Excel file, or click to browse
              <input type="file" accept=".csv,.xlsx,.xls" className="hidden" />
            </label>
          </div>
        </div>
      )}

      {tab === "export" && (
        <div className={`rounded-2xl p-6 ${cardBase}`}>
          <div className="mb-1 flex items-center gap-2">
            <Download className="h-5 w-5 text-blue-500" />
            <h2 className={`text-lg font-semibold ${textPrimary}`}>Export data</h2>
          </div>
          <p className={`mb-5 text-sm ${textSecondary}`}>Choose a data set and a format to download.</p>

          <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            Data set
          </p>
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {exportSets.map((set) => (
              <button
                key={set.id}
                onClick={() => setExportSet(set.id)}
                className={`flex flex-col items-start gap-2 rounded-xl p-4 text-left transition ${
                  exportSet === set.id
                    ? "border-2 border-blue-500 bg-blue-500/5"
                    : darkMode
                    ? "border border-gray-800 hover:border-gray-700"
                    : "border border-gray-100 hover:border-gray-200"
                }`}
              >
                <set.icon className="h-5 w-5 text-blue-500" />
                <span className={`text-sm font-medium ${textPrimary}`}>{set.label}</span>
                <span className={`text-xs ${textSecondary}`}>{set.count.toLocaleString()} records</span>
              </button>
            ))}
          </div>

          <p className={`mb-2 text-xs font-semibold uppercase tracking-wide ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            Format
          </p>
          <div className="mb-6 flex gap-2">
            {["csv", "xlsx"].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setExportFormat(fmt)}
                className={`rounded-lg px-4 py-2 text-sm font-medium uppercase transition ${
                  exportFormat === fmt
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-600/30"
                    : darkMode
                    ? "bg-[#1a1f2e] text-gray-400 hover:bg-[#232a3d]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90">
            <Download className="h-4 w-4" />
            Download export
          </button>
        </div>
      )}

      {tab === "clean" && (
        <div className={`rounded-2xl p-6 ${cardBase}`}>
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brush className="h-5 w-5 text-blue-500" />
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Data cleaning</h2>
            </div>
            <button
              onClick={runAllCleaning}
              disabled={runningAll || totalIssues === 0}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/30 hover:opacity-90 disabled:opacity-50"
            >
              {runningAll ? <Loader2 className="h-4 w-4 animate-spin" /> : <Brush className="h-4 w-4" />}
              {runningAll ? "Cleaning..." : "Fix all"}
            </button>
          </div>
          <p className={`mb-5 text-sm ${textSecondary}`}>
            Issues found across your Companies and Contacts records. Review and fix, or fix everything at once.
          </p>

          <div className="space-y-3">
            {cleaningIssues.map((issue) => {
              const fixed = fixedIds.includes(issue.id);
              return (
                <div
                  key={issue.id}
                  className={`flex items-center justify-between gap-4 rounded-xl border p-4 ${
                    darkMode ? "border-gray-800" : "border-gray-100"
                  } ${fixed ? (darkMode ? "opacity-50" : "opacity-60") : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${fixed ? "bg-emerald-500" : "bg-amber-500"}`}>
                      {fixed ? <CheckCircle2 className="h-4 w-4 text-white" /> : <issue.icon className="h-4 w-4 text-white" />}
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${textPrimary}`}>{issue.title}</p>
                      <p className={`text-xs ${textSecondary}`}>{issue.detail}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => fixIssue(issue.id)}
                    disabled={fixed}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      fixed
                        ? darkMode
                          ? "bg-emerald-950/40 text-emerald-400"
                          : "bg-emerald-50 text-emerald-600"
                        : darkMode
                        ? "border border-gray-700 text-gray-300 hover:bg-[#1a1f2e]"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {fixed ? "Fixed" : `Fix ${issue.count}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

