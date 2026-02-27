import React from 'react';
import Section from '../components/Section';
import { Laptop, Wifi, Shield, XCircle, Lock, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Laptop_link="https://finworld-us.myshopify.com/checkouts/cn/hWN9GAgiz8Jt9AS3fRWBZ6TB/en-us?_r=AQAB67BI[…]_id=174122565929&redirect_source=direct_checkout_product"
// export const Laptop_link="https://meke3a-q2.myshopify.com/checkouts/cn/hWN9BtHsOucDq37YXYNoc6O9/en-us?_r=AQABouq4s[…]e_id=174122565929&redirect_source=direct_checkout_product"
export const Subcription_link="https://finworld-us.myshopify.com/products/finworld-security-subscription-required"
// export const Subcription_link="https://meke3a-q2.myshopify.com/checkouts/cn/hWN9BvbI2C6N75bqxMsP7whN/en-us?_r=AQABG3J7C[…]e_id=174122565929&redirect_source=direct_checkout_product"

const Product: React.FC = () => {
  return (
    <div className="bg-[#fafafa] pt-24 md:pt-32">
      {/* 1. Hero Section - The Vessel */}
      <div className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-brand-navy rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl overflow-hidden">
         {/* Background Elements - Low Z-Index */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none z-0"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.2),_transparent_50%)] pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4 block">The Vessel</span>
                        <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-md leading-tight">
                            FinWorld <br/>Secured Device
                        </h1>
                        <p className="text-xl text-zinc-100 mb-8 leading-relaxed font-light opacity-90 max-w-lg">
                            A dedicated hardware vessel for your financial life. Optimized for the intranet portal and air-gapped from the risks of social media and daily browsing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                            <div className="text-4xl font-light text-white tracking-tight">$1,999.99</div>
                            <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-brand-cyan font-bold uppercase tracking-wider">Market Price</span>
                        </div>
                        
                        <Link to={`${Laptop_link}`} target='_blank' className="px-10 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-zinc-100 transition-colors shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 transform duration-200 inline-block text-center">
                            Order Now
                        </Link>
                    </motion.div>
                </div>
                <div className="relative mt-12 lg:mt-0 flex justify-center">
                    {/* Secured Device Hero Image */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10 w-full max-w-lg"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                            <img 
                                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=1000" 
                                alt="Secured Device Hardware" 
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Security Overlay Badge */}
                            <div className="absolute bottom-6 left-6 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 flex items-center gap-3">
                                <div className="bg-brand-cyan p-1.5 rounded-md">
                                    <Lock className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Status</div>
                                    <div className="text-white text-xs font-bold">Encrypted & Secured</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Glow behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-cyan/20 blur-[80px] -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Subscription Banner (Moved to 2nd position) */}
      <div className="bg-brand-navy rounded-[3rem] mx-2 md:mx-4 mt-8 p-8 md:p-12 relative overflow-hidden text-center shadow-2xl">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm">
                  <RefreshCw className="w-3 h-3" /> Ongoing Security
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">FinWorld Subscription</h2>
              <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
                  Ensure your device remains secure with our annual comprehensive security suite, including EDR updates, encryption maintenance, and administration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <Link to={`${Subcription_link}`} target='_blank' className="inline-flex items-center gap-2 px-8 py-5 bg-brand-cyan text-white rounded-full font-bold text-lg hover:bg-white hover:text-brand-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200">
                    Start Annual Subscription – $200*
                 </Link>
              </div>
              {/* <p className="mt-8 text-zinc-400 text-xs">*Plus applicable taxes. Requires compatible FinWorld hardware.</p> */}
          </div>
      </div>

      {/* 3. Mobile Digital Devices */}
      <Section className="bg-white">
          <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
                      FinWorld offers Mobile Digital Devices that securely send and receive your digital data
                  </h2>
                  <div className="w-24 h-1.5 bg-brand-cyan mx-auto rounded-full"></div>
              </div>

              {/* Big Laptop Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-zinc-200 group">
                  <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                      src="/new_laptop.png" 
                    //   src="/laptop.jpeg" 
                    //   src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=2000" 
                      alt="FinWorld Secure Mobile Device" 
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-1000"
                  />
                  {/* Optional tech overlay lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none z-10"></div>
              </div>
          </div>
      </Section>

      {/* 4. Feature Cards */}
      <Section className="bg-zinc-50 border-t border-zinc-200">
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300 group hover:border-brand-cyan relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-brand-navy transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-navy transition-colors duration-300 shadow-inner">
                    <Laptop className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Dedicated Hardware</h3>
                <p className="text-zinc-600 leading-relaxed">Solely for financial tasks. No games, no casual browsing, no risk. Built from the ground up for security.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-2 transition-all duration-300 group hover:border-brand-cyan relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-brand-navy transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-navy transition-colors duration-300 shadow-inner">
                    <Wifi className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Optimized Connectivity</h3>
                <p className="text-zinc-600 leading-relaxed">Pre-configured for the FinWorld Intranet Portal secure tunnel. Automatic VPN initiation on boot.</p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all duration-300 group hover:border-red-500 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-200 group-hover:bg-red-500 transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-inner">
                    <XCircle className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-navy">Remote Wipe</h3>
                <p className="text-zinc-600 leading-relaxed">In case of theft, the device can be instantly scrubbed remotely. Your data is never at risk of physical compromise.</p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Product;