import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Logo from "../components/Logo";
import { Lock, ArrowRight, ShieldCheck, Mail, Eye, EyeOff } from "lucide-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { login: doLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await doLogin(email, password);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 relative overflow-hidden pt-32 pb-12 px-4">
      {/* Background Decor for Mobile/Tablet */}
      <div className="absolute inset-0 bg-brand-navy lg:hidden"></div>

      <div className="w-full min-h-screen lg:min-h-0 lg:h-[800px] lg:max-w-7xl lg:mx-auto lg:rounded-[3rem] lg:my-10 lg:overflow-hidden lg:shadow-2xl lg:border lg:border-zinc-200 flex relative z-10 bg-white">
        {/* Left Panel - Visuals */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-brand-navy overflow-hidden flex-col justify-between p-16 text-white">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <div className="bg-white/95 p-8 rounded-3xl inline-block shadow-2xl border border-white/20 backdrop-blur-sm">
              <Logo className="scale-110" />
            </div>
          </div>

          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-3 h-3" /> Secure Environment
            </div>
            <h2 className="text-5xl font-display font-bold mb-6 leading-tight">
              Welcome Back to Your Vault.
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              Access your isolated financial environment securely. All
              connections are encrypted with military-grade AES-256 protocols.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-end border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Encryption Active
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24 bg-zinc-50 lg:bg-white relative">
          <div className="mx-auto w-full max-w-md">
            <div className="lg:hidden mb-8 text-center">
              <div className="bg-white p-6 rounded-3xl inline-block shadow-xl">
                <Logo />
              </div>
            </div>

            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy font-display mb-3">
                Secure Vault Access
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-brand-navy mb-2 ml-1"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-xl border-zinc-200 py-3.5 px-4 pl-11 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all bg-zinc-50 hover:bg-white"
                      placeholder="name@example.com"
                    />
                    <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-zinc-400" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2 ml-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold text-brand-navy"
                    >
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs font-bold text-brand-cyan hover:text-brand-navy transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-xl border-zinc-200 py-3.5 px-4 pl-11 pr-12 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all bg-zinc-50 hover:bg-white"
                      placeholder="••••••••"
                    />
                    <Lock className="absolute left-3.5 top-3.5 w-5 h-5 text-zinc-400" />

                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      title={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-3.5 top-3.5 w-8 h-8 rounded-md flex items-center justify-center text-zinc-500 hover:bg-zinc-100 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center items-center gap-2 rounded-xl bg-brand-navy px-4 py-4 text-base font-bold text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60"
              >
                {loading ? "Authenticating..." : "Authenticate Access"}{" "}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {error && <div className="mt-4 text-sm text-rose-600">{error}</div>}

            <div className="mt-8 text-center border-t border-zinc-100 pt-8">
              <p className="text-zinc-500 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-bold text-brand-cyan hover:text-brand-navy transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
