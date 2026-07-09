import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { CheckCircle, Loader2, FileText, Check, X, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    phone: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    const strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    };
    setPasswordStrength(strength);
    if (!strength.length) errors.push('At least 8 characters');
    if (!strength.uppercase) errors.push('One uppercase letter (A-Z)');
    if (!strength.lowercase) errors.push('One lowercase letter (a-z)');
    if (!strength.number) errors.push('One number (0-9)');
    if (!strength.special) errors.push('One special character (!@#$%^&*)');
    return errors.length > 0 ? errors.join(', ') : '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      setPasswordError(validatePassword(value));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!acceptedTerms) {
      alert("Please accept the Terms and Conditions to register.");
      setShowTermsModal(true);
      return;
    }
    const passwordValidation = validatePassword(formData.password);
    if (passwordValidation) {
      setPasswordError(passwordValidation);
      return;
    }
    if (formData.phone.length !== 10) {
      alert(`Phone number must be exactly 10 digits.`);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setShowPopup(true);
      } else {
        alert(data.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#1e40af]" />
            <h2 className="text-lg font-bold text-gray-800">Terms and Conditions</h2>
          </div>
          <button onClick={() => setShowTermsModal(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 text-sm text-gray-700 space-y-4">
          <p>By registering, you agree to use this platform only for legitimate business purposes and comply with all company policies.</p>
          <p>You must maintain confidentiality of your credentials and not share access with unauthorized persons.</p>
          <p>All data on this platform is proprietary to the company. Unauthorized use or distribution is prohibited.</p>
        </div>
        <div className="p-6 border-t">
          <div className="flex items-center gap-3 mb-4">
            <input
              type="checkbox"
              id="acceptTermsModal"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="w-4 h-4 text-[#1e40af]"
            />
            <label htmlFor="acceptTermsModal" className="text-sm text-gray-700">
              I have read and agree to the Terms and Conditions
            </label>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowTermsModal(false)} className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <X className="w-4 h-4" /> Close
            </button>
            <button
              onClick={() => { if (acceptedTerms) setShowTermsModal(false); else alert("Please check the box to accept."); }}
              className="flex-1 py-2 bg-[#1e40af] text-white rounded-xl font-medium hover:bg-[#1d4ed8] transition flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Accept & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f2463] via-[#1e40af] to-[#1d4ed8] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-2xl">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-3xl">CIP</div>
            <div className="text-blue-200 text-sm">Corporate Intelligence Platform</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#f0f4ff]">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl border border-[rgba(30,64,175,0.1)] p-8">
            <h1 className="text-[#0f172a] text-2xl font-bold mb-1">Create Account</h1>
            <p className="text-[#4b5e9e] text-sm mb-6">Fill in your details to register</p>

            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs px-3 py-2 rounded-xl mb-5">
              <strong>Note:</strong> Your account will be sent to Administrator for approval.
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#0f172a] mb-1.5">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  required disabled={isSubmitting} />
              </div>

              <div>
                <label className="block text-sm text-[#0f172a] mb-1.5">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  required disabled={isSubmitting} />
              </div>

              <div>
                <label className="block text-sm text-[#0f172a] mb-1.5">Password *</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange}
                    placeholder="Enter a strong password"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                    required disabled={isSubmitting} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4b5e9e] hover:text-[#1e40af]">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.password && (
                  <ul className="mt-2 space-y-1">
                    {[
                      { key: 'length', label: 'At least 8 characters' },
                      { key: 'uppercase', label: 'One uppercase letter' },
                      { key: 'lowercase', label: 'One lowercase letter' },
                      { key: 'number', label: 'One number' },
                      { key: 'special', label: 'One special character' },
                    ].map(({ key, label }) => (
                      <li key={key} className={`flex items-center gap-2 text-xs ${passwordStrength[key] ? 'text-green-600' : 'text-gray-400'}`}>
                        <span className={`w-2 h-2 rounded-full ${passwordStrength[key] ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                        {label}
                      </li>
                    ))}
                  </ul>
                )}
                {passwordError && <p className="text-xs text-red-500 mt-1">{passwordError}</p>}
              </div>

              <div>
                <label className="block text-sm text-[#0f172a] mb-1.5">Department *</label>
                <select name="department" value={formData.department} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  required disabled={isSubmitting}>
                  <option value="">Select Department</option>
                  <option value="Business Development">Business Development</option>
                  <option value="Franchise">Franchise Development</option>
                  <option value="Recruitment">Recruitment (Franchise)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#0f172a] mb-1.5">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handlePhoneChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(30,64,175,0.2)] bg-[#eef2ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 focus:border-[#3b82f6] transition-all"
                  required disabled={isSubmitting} maxLength={10} />
                <p className="text-xs text-gray-400 mt-1">Enter 10-digit mobile number</p>
              </div>

              {/* Terms Checkbox */}
              <div className="p-4 border border-[rgba(30,64,175,0.2)] rounded-xl bg-[#f8faff]">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="acceptTerms" checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#1e40af]" disabled={isSubmitting} />
                  <label htmlFor="acceptTerms" className="text-xs text-gray-700">
                    I agree to the{' '}
                    <button type="button" onClick={() => setShowTermsModal(true)}
                      className="text-[#1e40af] font-semibold hover:underline">
                      Terms and Conditions
                    </button>
                  </label>
                </div>
              </div>

              <button type="submit" disabled={isSubmitting || !!passwordError || !acceptedTerms}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending for Approval...</> : 'Register'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#4b5e9e]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#1e40af] font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>

      {showTermsModal && <TermsModal />}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Request Sent!</h3>
            <p className="text-sm text-gray-500 mb-5">
              Your account has been sent for approval. You'll receive an email once approved.
            </p>
            <button onClick={() => { setShowPopup(false); navigate('/login'); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-semibold hover:opacity-90 transition">
              OK, Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
export { Register };