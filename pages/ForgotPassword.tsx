import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { ArrowLeft, Mail, ShieldAlert, KeyRound } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-navy via-brand-dark to-black opacity-90"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy shadow-inner border border-zinc-100 mb-6">
                    <KeyRound className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-display font-bold text-brand-navy mb-2">
                    Account Recovery
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed">
                    Enter your registered email address to initiate the secure password reset protocol.
                </p>
            </div>

            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 ml-1">
                  Registered Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@example.com"
                    className="block w-full rounded-xl border-zinc-200 py-3.5 px-4 pl-11 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 transition-all"
                  />
                  <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-zinc-400" />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-xl bg-brand-navy px-4 py-4 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <ShieldAlert className="w-4 h-4" /> Send Recovery Link
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
              <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-brand-navy transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Secure Login
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;