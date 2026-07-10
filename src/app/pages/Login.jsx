import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { Eye, EyeOff, TrendingUp, Lock, AlertCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [require2fa, setRequire2fa] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [partialAuthData, setPartialAuthData] = useState(null);
  const [loginData, setLoginData] = useState({
    attempts: 0,
    remainingAttempts: 3,
    maxAttempts: 3,
    locked: false,
  });
  const [serverBusy, setServerBusy] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    localStorage.clear();
    fetchConnectionStatus();
    const interval = setInterval(fetchConnectionStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  const fetchConnectionStatus = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/connection-status`);
      if (response.ok) {
        const data = await response.json();
        if (data.connectionStatus) {
          setServerBusy(data.connectionStatus.isLimitReached);
        }
      }
    } catch (err) {
      console.error('Failed to fetch connection status:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // TEMP DEMO LOGIN - remove when backend is ready
    if (formData.email === "admin@sarthidb.com" && formData.password === "Admin@123") {
      login({ name: "Admin", email: formData.email, token: "demo-token" });
      navigate('/');
      return;
    }

    if (serverBusy) {
      setError('Server is busy. Please try again in a few minutes.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.require2fa) {
          setPartialAuthData({ email: data.email, name: data.name });
          await requestOTP(data.email);
          setRequire2fa(true);
          setLoading(false);
        } else {
          completeLogin(data);
        }
      } else {
        if (response.status === 503) {
          setServerBusy(true);
          setError('Server is busy. Please try again in a few minutes.');
        } else {
          setLoginData({
            attempts: data.attempts || 0,
            remainingAttempts: data.remainingAttempts || 0,
            maxAttempts: data.totalAttempts || 3,
            locked: data.locked || false,
          });
          setError(
            data.locked ? 'Your account is locked. Contact administrator.' :
            data.pending ? 'Account pending approval.' :
            data.blocked ? 'Your account has been blocked.' :
            data.message || 'Login failed.'
          );
        }
        setLoading(false);
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  const requestOTP = async (email) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/request-2fa-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) setError(data.message || 'Failed to send OTP');
    } catch (err) {
      setError('Failed to request OTP.');
    }
  };

  const verifyOTP = async () => {
    if (otp.length !== 6) { setError('Please enter a valid 6-digit OTP'); return; }
    setOtpLoading(true);
    setError('');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify-2fa`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: partialAuthData.email, otp }),
      });
      const data = await response.json();
      if (response.ok) completeLogin(data);
      else { setError(data.message || 'Invalid OTP.'); setOtpLoading(false); }
    } catch (err) {
      setError('Failed to verify OTP.');
      setOtpLoading(false);
    }
  };

  const completeLogin = (data) => {
    localStorage.setItem('token', data.token || '');
    localStorage.setItem('userName', data.name || '');
    localStorage.setItem('userEmail', data.email || '');
    localStorage.setItem('userDept', data.department || '');
    localStorage.setItem('isAdmin', data.is_admin ? 'true' : 'false');
    localStorage.setItem('userId', data.id || data.userId || '');
    localStorage.setItem('connectionId', data.connectionId || '');
    login({ name: data.name, email: data.email, token: data.token });
    navigate('/');
  };

  const resendOTP = async () => {
    setOtpLoading(true);
    await requestOTP(partialAuthData.email);
    setOtp('');
    setOtpLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f2463] via-[#1e40af] to-[#1d4ed8] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-3xl leading-tight">CIP</div>
              <div className="text-blue-200 text-sm">Corporate Intelligence Platform</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-[#1e40af] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[#0f172a] font-bold text-lg">CIP</div>
              <div className="text-[#4b5e9e] text-xs">Corporate Intelligence Platform</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8">
            <h1 className="text-[#0f172a] text-2xl font-bold mb-1">Welcome back</h1>
            <p className="text-[#4b5e9e] mb-6 text-sm">
              {require2fa ? 'Enter your 2FA verification code' : 'Sign in to your account to continue'}
            </p>

            {serverBusy && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                <p className="text-xs text-red-600">Server is busy. Please try again in a few minutes.</p>
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            {!require2fa ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-[#0f172a] mb-1.5">Email address</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                    required disabled={loading || serverBusy}
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#0f172a] mb-1.5">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'} name="password"
                      value={formData.password} onChange={handleChange} placeholder="••••••••"
                      className="w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                      required disabled={loading || serverBusy}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af] p-1">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-end mt-1.5">
                    <Link to="/forgot-password" className="text-xs text-[#1e40af] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                </div>

                {loginData.attempts > 0 && !loginData.locked && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs text-yellow-700">
                    <span className="font-semibold">Attempt {loginData.attempts} of {loginData.maxAttempts}.</span>{' '}
                    {loginData.remainingAttempts} attempt(s) remaining before account lock.
                  </div>
                )}

                {loginData.locked && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Account locked. Contact administrator to unlock.
                  </div>
                )}

                <button type="submit" disabled={loading || loginData.locked || serverBusy}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  {loading
                    ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> Signing in...</>
                    : loginData.locked
                    ? <><Lock className="w-4 h-4" /> Account Locked</>
                    : 'Sign In'
                  }
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="mx-auto w-14 h-14 bg-[#eef2ff] rounded-full flex items-center justify-center mb-3">
                    <Lock className="w-7 h-7 text-[#1e40af]" />
                  </div>
                  <p className="text-sm text-[#4b5e9e]">
                    Code sent to <span className="font-semibold text-[#0f172a]">{partialAuthData?.email}</span>
                  </p>
                </div>

                <input type="text" value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="000000" maxLength={6}
                  className="w-full px-4 py-3 text-center text-2xl font-mono rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30"
                  disabled={otpLoading}
                />

                <button onClick={verifyOTP} disabled={otp.length !== 6 || otpLoading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold disabled:opacity-50 flex items-center justify-center gap-2">
                  {otpLoading
                    ? <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> Verifying...</>
                    : "Verify and Continue"
                  }
                </button>

                <div className="flex gap-2">
                  <button onClick={resendOTP} disabled={otpLoading}
                    className="flex-1 py-2 border border-[#1e40af] text-[#1e40af] rounded-xl text-sm font-medium hover:bg-[#eef2ff] transition disabled:opacity-50">
                    Resend OTP
                  </button>
                  <button onClick={() => { setRequire2fa(false); setOtp(''); setError(''); }} disabled={otpLoading}
                    className="flex-1 py-2 border border-gray-300 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50">
                    Back
                  </button>
                </div>
              </div>
            )}

            <p className="mt-6 text-center text-sm text-[#4b5e9e]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#1e40af] font-semibold hover:underline">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;