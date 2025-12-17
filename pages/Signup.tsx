import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { ShieldCheck, ArrowLeft, User, Mail, Lock, Phone } from 'lucide-react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 relative overflow-hidden pt-32 pb-12 px-4">
      {/* Background Decor for Mobile */}
      <div className="absolute inset-0 bg-brand-dark lg:hidden"></div>

      <div className="w-full min-h-screen lg:min-h-0 lg:h-[850px] lg:max-w-7xl lg:mx-auto lg:rounded-[3rem] lg:my-10 lg:overflow-hidden lg:shadow-2xl lg:border lg:border-zinc-200 flex relative z-10 bg-white">
        
        {/* Left Panel - Visuals */}
        <div className="hidden lg:flex lg:w-5/12 relative bg-brand-dark overflow-hidden flex-col justify-between p-12 text-white border-r border-white/5">
           <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 to-brand-dark"></div>
           
           <div className="relative z-10 flex flex-col">
              <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group text-sm font-medium">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
              </Link>
              <div className="w-fit bg-white p-6 rounded-3xl shadow-xl shadow-black/20">
                <div className="scale-110 origin-left">
                    <Logo />
                </div>
            </div>
           </div>
           
           <div className="relative z-10">
               <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
                   Begin Your Legacy Protection.
               </h2>
               <div className="space-y-6">
                   {[
                       "Hardware Isolation Protocol",
                       "Legacy Transfer System",
                       "24/7 Threat Monitoring",
                       "Encrypted Data Vault"
                   ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 text-zinc-300">
                           <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                               <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                           </div>
                           <span className="font-medium">{item}</span>
                       </div>
                   ))}
               </div>
           </div>
           
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center py-12 px-6 sm:px-12 lg:px-24 bg-zinc-50 lg:bg-white relative">
          <div className="mx-auto w-full max-w-lg">
              
            <div className="lg:hidden mb-8 text-center">
                 <div className="bg-white p-6 rounded-3xl inline-block shadow-xl">
                    <Logo />
                 </div>
            </div>

            <div className="text-center lg:text-left mb-10">
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy font-display mb-3">
                Create Secure Account
              </h2>
              <p className="text-zinc-500">
                Initialize your secure digital vault environment.
              </p>
            </div>

            <form className="space-y-5" action="#" method="POST">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-bold text-brand-navy mb-2 ml-1">
                      First Name
                    </label>
                    <div className="relative">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            required
                            className="block w-full rounded-xl border-zinc-200 py-3 px-4 pl-10 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 hover:bg-white transition-all"
                            placeholder="Jane"
                        />
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-bold text-brand-navy mb-2 ml-1">
                      Last Name
                    </label>
                    <div className="relative">
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            required
                            className="block w-full rounded-xl border-zinc-200 py-3 px-4 pl-10 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 hover:bg-white transition-all"
                            placeholder="Doe"
                        />
                         <User className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                    </div>
                  </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-navy mb-2 ml-1">
                  Email address
                </label>
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-xl border-zinc-200 py-3 px-4 pl-10 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 hover:bg-white transition-all"
                        placeholder="name@example.com"
                    />
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-2 ml-1">
                  Phone Number <span className="text-zinc-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="block w-full rounded-xl border-zinc-200 py-3 px-4 pl-10 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 hover:bg-white transition-all"
                        placeholder="(555) 555-5555"
                    />
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-bold text-brand-navy mb-2 ml-1">
                  Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="block w-full rounded-xl border-zinc-200 py-3 px-4 pl-10 text-zinc-900 shadow-sm focus:ring-2 focus:ring-brand-cyan focus:border-transparent bg-zinc-50 hover:bg-white transition-all"
                        placeholder="Min 8 characters"
                    />
                    <Lock className="absolute left-3 top-3.5 w-4 h-4 text-zinc-400" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full justify-center items-center gap-2 rounded-xl bg-brand-navy px-4 py-4 text-base font-bold text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ShieldCheck className="w-5 h-5" /> Initialize Vault
                </button>
              </div>
            </form>

             <div className="mt-8 text-center border-t border-zinc-100 pt-8">
               <p className="text-zinc-500 text-sm mb-4">
                 Already have a vault?{' '}
                 <Link to="/login" className="font-bold text-brand-cyan hover:text-brand-navy transition-colors">
                   Sign in
                 </Link>
               </p>
               <p className="text-xs text-zinc-400 max-w-xs mx-auto mb-4">
                 By creating an account, you agree to FinWorld's Terms of Service and Privacy Policy.
               </p>
               <p className="text-[10px] text-zinc-400 max-w-xs mx-auto leading-relaxed">
                 This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;