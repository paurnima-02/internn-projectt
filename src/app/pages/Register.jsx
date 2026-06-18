import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export function Register() {
  const {
    register
  } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    const ok = register(name, email, password);
    if (ok) navigate("/");else setError("Registration failed. Try again.");
  };
  return /*#__PURE__*/_jsxDEV("div", {
    className: "min-h-screen flex",
    children: [/*#__PURE__*/_jsxDEV("div", {
      className: "hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f2463] via-[#1e40af] to-[#1d4ed8] items-center justify-center p-12 relative overflow-hidden",
      children: [/*#__PURE__*/_jsxDEV("div", {
        className: "absolute inset-0 opacity-10",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl"
        }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
          className: "absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl"
        }, void 0, false)]
      }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
        className: "relative z-10",
        children: /*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl",
            children: /*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-10 h-10 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-white font-bold text-3xl leading-tight",
              children: "CIP"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-blue-200 text-sm",
              children: "Corporate Intelligence Platform"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)
      }, void 0, false)]
    }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
      className: "flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]",
      children: /*#__PURE__*/_jsxDEV("div", {
        className: "w-full max-w-md",
        children: [/*#__PURE__*/_jsxDEV("div", {
          className: "flex items-center gap-3 mb-8 lg:hidden",
          children: [/*#__PURE__*/_jsxDEV("div", {
            className: "w-10 h-10 rounded-xl bg-[#1e40af] flex items-center justify-center",
            children: /*#__PURE__*/_jsxDEV(TrendingUp, {
              className: "w-6 h-6 text-white"
            }, void 0, false)
          }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
            children: [/*#__PURE__*/_jsxDEV("div", {
              className: "text-[#0f172a] font-bold text-lg leading-tight",
              children: "CIP"
            }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
              className: "text-[#4b5e9e] text-xs",
              children: "Corporate Intelligence Platform"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
          className: "bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8",
          children: [/*#__PURE__*/_jsxDEV("h1", {
            className: "text-[#0f172a] mb-1",
            children: "Create your account"
          }, void 0, false), /*#__PURE__*/_jsxDEV("p", {
            className: "text-[#4b5e9e] mb-6",
            children: "Get started with CIP for free"
          }, void 0, false), error && /*#__PURE__*/_jsxDEV("div", {
            className: "mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm",
            children: error
          }, void 0, false), /*#__PURE__*/_jsxDEV("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [/*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("label", {
                htmlFor: "name",
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Full Name"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                id: "name",
                type: "text",
                value: name,
                onChange: e => setName(e.target.value),
                placeholder: "John Doe",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("label", {
                htmlFor: "email",
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Work Email"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                id: "email",
                type: "email",
                value: email,
                onChange: e => setEmail(e.target.value),
                placeholder: "you@company.com",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("label", {
                htmlFor: "password",
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Password"
              }, void 0, false), /*#__PURE__*/_jsxDEV("div", {
                className: "relative",
                children: [/*#__PURE__*/_jsxDEV("input", {
                  id: "password",
                  type: showPassword ? "text" : "password",
                  value: password,
                  onChange: e => setPassword(e.target.value),
                  placeholder: "Min. 6 characters",
                  className: "w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                }, void 0, false), /*#__PURE__*/_jsxDEV("button", {
                  type: "button",
                  onClick: () => setShowPassword(!showPassword),
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af] p-1",
                  children: showPassword ? /*#__PURE__*/_jsxDEV(EyeOff, {
                    className: "w-4 h-4"
                  }, void 0, false) : /*#__PURE__*/_jsxDEV(Eye, {
                    className: "w-4 h-4"
                  }, void 0, false)
                }, void 0, false)]
              }, void 0, true)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("div", {
              children: [/*#__PURE__*/_jsxDEV("label", {
                htmlFor: "confirm",
                className: "block text-sm text-[#0f172a] mb-1.5",
                children: "Confirm Password"
              }, void 0, false), /*#__PURE__*/_jsxDEV("input", {
                id: "confirm",
                type: "password",
                value: confirm,
                onChange: e => setConfirm(e.target.value),
                placeholder: "Re-enter password",
                className: "w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
              }, void 0, false)]
            }, void 0, true), /*#__PURE__*/_jsxDEV("button", {
              type: "submit",
              className: "w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 active:scale-[0.99] transition-all shadow-lg shadow-blue-500/25 mt-2",
              children: "Create Account"
            }, void 0, false)]
          }, void 0, true), /*#__PURE__*/_jsxDEV("p", {
            className: "mt-6 text-center text-sm text-[#4b5e9e]",
            children: ["Already have an account?", " ", /*#__PURE__*/_jsxDEV(Link, {
              to: "/login",
              className: "text-[#1e40af] font-semibold hover:underline",
              children: "Sign in"
            }, void 0, false)]
          }, void 0, true)]
        }, void 0, true)]
      }, void 0, true)
    }, void 0, false)]
  }, void 0, true);
}
