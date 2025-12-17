import React from 'react';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { Briefcase, Lock, ArrowRight, ShieldCheck, Settings, Users, AlertTriangle, Globe, Key, FileKey, Share2, Server, LayoutDashboard, Database, DollarSign, RefreshCw, Monitor, CheckCircle2, Cpu, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BrokerDealers: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 overflow-hidden">
      
      {/* --- 1. HERO SECTION (Broker Dealer Access) --- */}
      <div className="bg-brand-navy pb-32 pt-16 relative overflow-hidden rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-dark rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm shadow-lg shadow-brand-cyan/5">
                        <Briefcase className="w-3 h-3" /> For Industry Leaders
                    </div>
                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        FinWorld offers financial industry leaders a tool to support their customers in a secure, easy way.
                    </h1>
                    
                    {/* Access Badge */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md mb-8 shadow-xl relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl text-brand-cyan font-bold mb-2 flex items-center gap-2">
                                <div className="p-1.5 bg-brand-cyan/20 rounded-lg">
                                    <Lock className="w-5 h-5" />
                                </div>
                                Broker Dealer Access Only
                            </h3>
                            <p className="text-zinc-300 text-sm font-medium">
                                Specialized intranet solutions for engaging brokers with targeted, patented devices.
                            </p>
                        </div>
                    </motion.div>
                    
                    <Link to="/contact" className="px-8 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-brand-cyan hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,144,212,0.4)] flex items-center gap-2 group transform hover:-translate-y-1 inline-flex">
                        Request Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Hero Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group h-[300px] md:h-[500px]"
                >
                    <div className="absolute inset-0 bg-brand-cyan/20 rounded-3xl transform -rotate-3 scale-105 transition-transform duration-500 blur-lg"></div>
                    <img 
                        src="/brokerdealer-hero.jpg"
                        alt="Broker Dealer Meeting" 
                        className="relative rounded-3xl shadow-2xl border border-white/10 w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-700"
                    />
                    <div className="absolute bottom-8 left-8 bg-zinc-900/90 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold mb-1">Infrastructure</div>
                        <div className="flex items-center gap-2">
                            <Server className="w-4 h-4 text-brand-cyan" />
                            <span className="text-white font-bold text-sm">Dedicated Intranet</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      {/* --- 2. NOT A ONE-SIZE-FITS-ALL SOLUTION --- */}
      <Section className="relative z-0 -mt-20 pt-32 pb-24">
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70 mask-image:linear-gradient(to bottom, transparent, black, transparent)"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16 max-w-4xl mx-auto">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                      Not a One-Size-Fits-All Intranet Solution
                  </h2>
                  <p className="text-xl text-zinc-600 font-medium leading-relaxed">
                      Each broker dealer has the ability to select services and choose what works for them via an administrator panel.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* BROKERS Definition */}
                  <SpotlightCard className="bg-white border border-zinc-200 p-6 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full flex flex-col group hover:border-brand-cyan/30 transition-all duration-300" spotlightColor="rgba(0, 144, 212, 0.05)">
                      <div className="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Users className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-4 uppercase tracking-wide group-hover:text-brand-cyan transition-colors">BROKERS</h3>
                      <p className="text-zinc-600 leading-relaxed text-lg">
                          Brokers use FinWorld to help clients organize information, access accounts and collaborate with clients in a secure environment.
                      </p>
                  </SpotlightCard>

                  {/* BROKER DEALERS Definition */}
                  <SpotlightCard className="bg-brand-navy border border-brand-dark p-6 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden h-full flex flex-col text-white group" spotlightColor="rgba(255, 255, 255, 0.1)">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-cyan mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <LayoutDashboard className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">BROKER DEALERS</h3>
                      <p className="text-zinc-300 leading-relaxed text-lg group-hover:text-white transition-colors">
                          Broker dealers use FinWorld to engage brokers with targeted, patented, secure, customized and unique devices that are exclusive to the broker dealer relationship.
                      </p>
                  </SpotlightCard>
              </div>

               {/* FinWorld Purpose Banner */}
               <div className="mt-16 bg-zinc-100 p-8 rounded-3xl border border-zinc-200 text-center relative overflow-hidden group hover:shadow-lg transition-all">
                    <div className="absolute inset-0 bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="text-lg text-brand-navy font-medium italic relative z-10">
                        "FinWorld’s purpose is to enhance and simplify the use of technology in the collection of personal data in a safe, simple and secure manner."
                    </p>
               </div>
          </div>
      </Section>

      {/* --- 3. SPECIALIZATION & SECURITY --- */}
      <Section className="bg-white border-y border-zinc-100">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
              
              {/* Specialization */}
              <div className="space-y-8">
                  <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase mb-4 border border-brand-navy/10">
                          <Briefcase className="w-3 h-3" /> Value Proposition
                      </div>
                      <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Our Specialization</h2>
                      <p className="text-lg text-zinc-600 leading-relaxed">
                          FinWorld provides a secure device accessible solely through our intranet portal to view and manage important personal wealth, assets and essential documents.
                      </p>
                  </div>
                  
                  <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 hover:border-brand-cyan/30 transition-colors">
                      <p className="text-zinc-700 leading-relaxed italic font-medium">
                          "This is a digital vault combined with a secured device to safeguard private information and is an easy way to transfer all your important data to your heirs when they will need it most with our simple transfer of access form."
                      </p>
                  </div>
              </div>

              {/* Security & Safety */}
              <div className="space-y-12">
                  {/* Intranet Security */}
                  <div className="space-y-6">
                      <h2 className="font-display text-3xl font-bold text-brand-navy">FinWorld Intranet Security</h2>
                      
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex gap-4 p-5 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group bg-white"
                      >
                          <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <Key className="w-5 h-5" />
                          </div>
                          <p className="text-zinc-600 text-sm leading-relaxed">
                              We restrict access to sensitive information using a series of integrated role-based files and page permissions on a regular basis. Information can only be accessed by <strong className="text-brand-navy">IP address, device, username and password.</strong>
                          </p>
                      </motion.div>

                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex gap-4 p-5 rounded-2xl border border-red-100 bg-red-50 shadow-sm hover:shadow-md transition-all group"
                      >
                          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <AlertTriangle className="w-5 h-5" />
                          </div>
                          <p className="text-red-900 text-sm leading-relaxed font-medium">
                              In the event a device is stolen or misplaced, that device can be <strong className="text-red-700">remotely wiped and replaced.</strong>
                          </p>
                      </motion.div>
                  </div>

                  {/* How Safe Is It? (Added) */}
                  <div className="space-y-6 pt-6 border-t border-zinc-100">
                        <h2 className="font-display text-3xl font-bold text-brand-navy">How Safe Is It?</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            Protecting customers important information and documents is FinWorld’s top priority. That’s why we implemented multiple layers of defense to safeguard your vital data.
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {['COMPLIANCE STANDARDS', 'FIREWALL DEFENSE', 'ENDPOINT SECURITY'].map((item, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-3 font-bold text-brand-navy bg-white p-3 rounded-xl border border-zinc-200 shadow-sm hover:border-brand-cyan/50 transition-colors cursor-default"
                                >
                                    <ShieldCheck className="w-5 h-5 text-brand-cyan" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 4. COST STRUCTURE --- */}
      <Section className="bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4 block">Investment</span>
                  <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Cost Structure</h2>
                  
                   {/* Glowing 100% Banner */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative group inline-block mb-8 cursor-default"
                  >
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative px-8 py-4 bg-brand-navy text-white rounded-xl font-bold text-lg shadow-xl flex items-center gap-3 border border-white/10">
                          <CheckCircle2 className="w-6 h-6 text-brand-cyan animate-pulse" />
                          100% of Computers Paid for by the Broker Dealer
                      </div>
                  </motion.div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                  {/* Annual Cost */}
                  <SpotlightCard className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-lg flex flex-col h-full hover:border-brand-navy transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-brand-navy border border-zinc-200 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                               <RefreshCw className="w-6 h-6" />
                           </div>
                           <h3 className="font-bold text-brand-navy text-xl">Annual Cost</h3>
                      </div>
                      <div className="text-4xl font-bold text-brand-navy mb-2">$200 <span className="text-sm text-zinc-400 font-normal">/ Computer</span></div>
                      <p className="text-zinc-600 text-sm leading-relaxed mt-4">
                          For security updates, encryption, EDR, administration and access to assist clients.
                      </p>
                  </SpotlightCard>

                  {/* Replacement Computers */}
                  <SpotlightCard className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-lg flex flex-col h-full hover:border-brand-cyan transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-brand-cyan border border-zinc-200 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                               <Monitor className="w-6 h-6" />
                           </div>
                           <h3 className="font-bold text-brand-navy text-xl">Replacement</h3>
                      </div>
                      <ul className="space-y-4 text-sm text-zinc-600">
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5"></div> Market price of the computer at the time</li>
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5"></div> <span className="font-bold text-brand-navy">$100</span> to reprogram computer</li>
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5"></div> Market price to ship with options of overnight or ground</li>
                      </ul>
                  </SpotlightCard>

                  {/* Additional Computers */}
                  <SpotlightCard className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-lg flex flex-col h-full hover:border-zinc-900 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-6">
                           <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-900 border border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                               <Users className="w-6 h-6" />
                           </div>
                           <h3 className="font-bold text-brand-navy text-xl">Multiple Users</h3>
                      </div>
                       <ul className="space-y-4 text-sm text-zinc-600">
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-1.5"></div> Market cost of computer</li>
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-1.5"></div> <span className="font-bold text-brand-navy">$100</span> to program</li>
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-1.5"></div> Market shipping price</li>
                          <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-zinc-400 rounded-full mt-1.5"></div> <span className="font-bold text-brand-navy">$200</span> per year for all EDR ongoing updates and support</li>
                      </ul>
                  </SpotlightCard>
              </div>
          </div>
      </Section>

      {/* --- 5. WHY IS THIS IMPORTANT? (Targets) --- */}
      <Section className="bg-zinc-950 text-white relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tight">Why Is This Important?</h2>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors duration-500">
                      <p className="text-2xl font-light leading-relaxed mb-4 text-zinc-100">
                          Personal attacks are up over <span className="text-red-500 font-bold bg-red-500/10 px-2 rounded">100%</span> on the 55-plus population as of 2023.
                      </p>
                      <p className="text-zinc-400 italic text-sm border-l-2 border-red-500 pl-4">
                          This group of people are targeted because they have the money and are not as computer savvy.
                      </p>
                  </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                  {/* Old Targets */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-800/80 transition-all duration-300"
                  >
                      <h4 className="font-bold text-zinc-500 text-xs uppercase tracking-widest mb-6 border-b border-zinc-800 pb-2">Old Targets</h4>
                      <ul className="space-y-4 text-zinc-400 text-sm">
                          {['Hospitals', 'Oil companies', 'Big companies', 'Ransomware for crypto'].map((t, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> {t}
                             </li>
                          ))}
                      </ul>
                  </motion.div>
                  {/* New Targets */}
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-red-950/10 border border-red-900/40 p-8 rounded-3xl relative overflow-hidden group hover:bg-red-950/20 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-300"
                  >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><AlertTriangle className="w-16 h-16 text-red-500" /></div>
                      <h4 className="font-bold text-red-500 text-xs uppercase tracking-widest mb-6 border-b border-red-900/30 pb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> New Targets
                      </h4>
                      <ul className="space-y-4 text-white font-bold text-sm relative z-10">
                          {['Mom and Dad', 'Grandma and Grandpa', 'Great Grandma', 'Grandpa Crypto'].map((t, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,1)]"></div> {t}
                             </li>
                          ))}
                      </ul>
                  </motion.div>
              </div>
          </div>
      </Section>

      {/* --- 6. HOW IT WORKS & TRANSFER OF ACCESS --- */}
      <Section className="bg-zinc-50 relative">
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* How It Works */}
                  <div>
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase mb-6">
                          <Settings className="w-3 h-3" /> Process
                       </div>
                       <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">How It Works</h2>
                       <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                           At time of need, passwords and login information will be shared so all documents can be easily accessed anywhere in the world. If desired, multiple computer copies can be made to allow more than one party to access accounts and personal information.
                       </p>
                       <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm relative overflow-hidden group">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cyan"></div>
                           <p className="font-medium text-brand-navy italic relative z-10">
                               "This allows trustees, children and other responsible parties to pick up right where you left off. The gift of organization is the ultimate final gift one can receive."
                           </p>
                       </div>
                  </div>

                  {/* Transfer of Access */}
                  <SpotlightCard className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 shadow-xl relative overflow-hidden h-full group">
                       <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-6 text-brand-cyan group-hover:scale-110 transition-transform">
                          <Share2 className="w-6 h-6" />
                       </div>
                       <h3 className="font-display text-3xl font-bold text-brand-navy mb-6">Transfer of Access</h3>
                       <p className="text-zinc-600 mb-8 leading-relaxed">
                           Allows a transfer of information right when needed to the people who need it most:
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4">
                           {["Spouse / Significant Other", "Trustee", "Executor", "Children"].map((role, i) => (
                               <motion.div 
                                    key={i} 
                                    whileHover={{ scale: 1.05 }}
                                    className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100 font-bold text-brand-navy text-sm hover:border-brand-cyan/30 hover:bg-white hover:shadow-md transition-all cursor-default"
                                >
                                   <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
                                   {role}
                               </motion.div>
                           ))}
                       </div>
                  </SpotlightCard>
              </div>
          </div>
      </Section>

      {/* --- 7. WHY FINWORLD? (Pain Points) --- */}
      <Section className="bg-white border-t border-zinc-100 pb-32">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Why FinWorld?</h2>
                  <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-light">
                      Over 30 years of financial planning seeing the same problem happening over and over.
                  </p>
              </div>

              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                  {[
                      {
                        text: "Spouses struggling to take over and manage the family's affairs after the death of a partner",
                        icon: Users
                      },
                      {
                        text: "Children struggling to find everything needed to manage and settle an estate",
                        icon: FileKey
                      },
                      {
                        text: "Out of state executors with limited time to find everything needed to manage and settle the estate",
                        icon: Globe
                      },
                      {
                        text: "Secure way to store sensitive documents and conduct financial business electronically",
                        icon: Database
                      }
                  ].map((item, i) => (
                      <motion.div key={i} variants={itemVariants}>
                        <SpotlightCard 
                            className="flex gap-6 p-8 bg-zinc-50 rounded-3xl border border-zinc-200 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300 group hover:border-brand-cyan/50"
                            spotlightColor="rgba(0, 144, 212, 0.05)"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-zinc-200 text-brand-navy shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                <item.icon className="w-7 h-7" />
                            </div>
                            <p className="text-zinc-700 leading-relaxed font-medium text-lg flex items-center group-hover:text-brand-navy transition-colors">
                                {item.text}
                            </p>
                        </SpotlightCard>
                      </motion.div>
                  ))}
              </motion.div>
          </div>
      </Section>

    </div>
  );
};

export default BrokerDealers;