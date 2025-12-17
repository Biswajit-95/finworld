import React from 'react';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { Briefcase, Lock, ArrowRight, ShieldCheck, PenTool, RefreshCw, Users, AlertTriangle, Monitor, Share2, FileKey, CheckCircle2, HeartHandshake, FileCheck, UserCheck, Key, Clock, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Advisors: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 overflow-hidden">
      
      {/* --- 1. HERO SECTION (Advisor Access) --- */}
      <div className="bg-brand-navy pb-32 pt-16 relative overflow-hidden rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm shadow-lg shadow-brand-cyan/5">
                        <Briefcase className="w-3 h-3" /> For Advisors
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
                                Advisor Access Only
                            </h3>
                            <p className="text-zinc-300 text-sm font-medium">
                                Exclusive portal access for authorized financial advisors and brokers.
                            </p>
                        </div>
                    </motion.div>
                    
                    <Link to="/contact" className="px-8 py-4 bg-white text-brand-navy rounded-full font-bold hover:bg-brand-cyan hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,144,212,0.4)] flex items-center gap-2 group transform hover:-translate-y-1 inline-flex">
                        Request Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                {/* Man in Suit Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative group h-[400px] md:h-[550px] perspective-1000"
                >
                    <div className="absolute inset-0 bg-brand-cyan/30 rounded-3xl transform rotate-6 scale-95 transition-transform duration-700 blur-xl opacity-60 group-hover:rotate-3 group-hover:scale-100"></div>
                    <div className="absolute inset-0 bg-brand-navy/50 rounded-3xl transform -rotate-3 scale-95 transition-transform duration-700 blur-lg opacity-80 group-hover:-rotate-1 group-hover:scale-100"></div>
                    
                    <img 
                        src="/advisor-herp.jpg" 
                        alt="Professional Financial Advisor" 
                        className="relative rounded-3xl shadow-2xl border border-white/10 w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    
                    {/* Floating Status Card */}
                    <div className="absolute bottom-8 right-8 bg-zinc-900/90 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/20 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold mb-1">Security Level</div>
                        <div className="flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-white font-bold text-sm tracking-wide">Portal Secure</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </div>

      {/* --- 2. OUR SPECIALIZATION --- */}
      <Section className="relative z-0 -mt-20 pt-32 pb-24">
          {/* Background Decor */}
          <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-70 mask-image:linear-gradient(to bottom, transparent, black, transparent)"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4 border border-brand-cyan/20">
                  Value Proposition
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-12">Our Specialization</h2>
              
              {/* Added mt-6 padding-top to card to prevent text overlap with top border */}
              <SpotlightCard className="bg-white border border-zinc-200 rounded-[2.5rem] shadow-xl relative overflow-hidden text-left" spotlightColor="rgba(0, 144, 212, 0.05)">
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy"></div>
                  
                  <div className="relative z-10 p-6 md:p-14 pt-10 md:pt-16 grid md:grid-cols-[1fr_auto] gap-10 items-center">
                      <div className="space-y-8">
                          <p className="text-2xl md:text-3xl text-brand-navy leading-snug font-serif font-medium">
                              FinWorld provides a secure device accessible solely through our intranet portal to view and manage important personal wealth, assets and essential documents.
                          </p>
                          <div className="h-px w-24 bg-zinc-200"></div>
                          <p className="text-lg text-zinc-600 leading-relaxed font-light">
                              This is a digital vault combined with a secured device to safeguard private information and is an easy way to transfer all your important data to your heirs when they will need it most with our simple transfer of access form.
                          </p>
                      </div>
                      <div className="hidden md:flex flex-col items-center justify-center pl-10 border-l border-zinc-100">
                           <div className="w-24 h-24 bg-brand-navy rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-navy/30 mb-6 transform rotate-6 hover:rotate-0 transition-all duration-500">
                               <ShieldCheck className="w-12 h-12 text-white" />
                           </div>
                           <span className="text-xs font-bold text-brand-navy uppercase tracking-widest">Secure Vault</span>
                      </div>
                  </div>
              </SpotlightCard>
          </div>
      </Section>

      {/* --- 3. WHY FINWORLD? (Pain Points - Redesigned) --- */}
      <Section className="bg-zinc-900 text-white relative overflow-hidden border-t border-zinc-800">
          {/* Rich Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-navy/50 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why FinWorld?</h2>
                  <div className="inline-block bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm">
                      <p className="text-xl text-zinc-200 font-light italic">
                          "Over 30 years of financial planning seeing the same problem happening over and over."
                      </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {[
                      {
                        text: "Spouses struggling to take over and manage the family's affairs after the death of a partner.",
                        icon: HeartHandshake,
                        label: "Continuity Risk"
                      },
                      {
                        text: "Children struggling to find everything needed to manage and settle an estate.",
                        icon: Users,
                        label: "Estate Settlement"
                      },
                      {
                        text: "Out of state executors with limited time to find everything needed to manage and settle the estate.",
                        icon: Clock,
                        label: "Time Constraints"
                      },
                      {
                        text: "Secure way to store sensitive documents and conduct financial business electronically.",
                        icon: Database,
                        label: "Data Security"
                      }
                  ].map((item, i) => (
                      <SpotlightCard 
                        key={i}
                        className="flex flex-col p-6 md:p-8 bg-zinc-800/50 rounded-3xl border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 group h-full"
                        spotlightColor="rgba(0, 144, 212, 0.15)"
                      >
                          <div className="flex items-center justify-between mb-6">
                              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300">
                                  <item.icon className="w-6 h-6" />
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-brand-cyan transition-colors">
                                  {item.label}
                              </span>
                          </div>
                          <p className="text-zinc-300 leading-relaxed text-lg font-light group-hover:text-white transition-colors">
                              {item.text}
                          </p>
                      </SpotlightCard>
                  ))}
              </div>
          </div>
      </Section>

      {/* --- 4. WHY IS THIS IMPORTANT (Targets) --- */}
      <Section className="bg-zinc-50 text-brand-navy relative overflow-hidden py-24 border-b border-zinc-200">
          <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tight text-brand-navy">Why Is This Important?</h2>
                  <div className="bg-white p-8 rounded-3xl border border-zinc-200 mb-8 shadow-lg relative overflow-hidden group hover:border-red-200 transition-colors">
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500"></div>
                      <p className="text-2xl font-medium leading-relaxed mb-4 text-zinc-800">
                          Personal attacks are up over <span className="text-red-600 font-bold bg-red-50 px-2 rounded">100%</span> on the 55-plus population as of 2023.
                      </p>
                      <p className="text-zinc-500 italic text-base">
                          This group of people are targeted because they have the money and are not as computer savvy.
                      </p>
                  </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                  {/* Old Targets */}
                  <div className="bg-zinc-100 border border-zinc-200 p-8 rounded-3xl hover:bg-zinc-200 transition-colors duration-300">
                      <h4 className="font-bold text-zinc-500 text-xs uppercase tracking-widest mb-6 border-b border-zinc-300 pb-2">Old Targets</h4>
                      <ul className="space-y-4 text-zinc-600 text-sm font-medium">
                          {['Hospitals', 'Oil companies', 'Big companies', 'Ransomware for crypto'].map((t, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div> {t}
                             </li>
                          ))}
                      </ul>
                  </div>
                  {/* New Targets */}
                  <div className="bg-red-50 border border-red-100 p-8 rounded-3xl relative overflow-hidden group hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300">
                      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><AlertTriangle className="w-16 h-16 text-red-600" /></div>
                      <h4 className="font-bold text-red-600 text-xs uppercase tracking-widest mb-6 border-b border-red-200 pb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> New Targets
                      </h4>
                      <ul className="space-y-4 text-brand-navy font-bold text-sm relative z-10">
                          {['Mom and Dad', 'Grandma and Grandpa', 'Great Grandma', 'Grandpa Crypto'].map((t, i) => (
                             <li key={i} className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> {t}
                             </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 5. TRANSFER OF ACCESS & HOW IT WORKS --- */}
      <Section className="bg-white relative">
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  {/* Transfer of Access */}
                  <div>
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase mb-6">
                          <Share2 className="w-3 h-3" /> Protocol
                       </div>
                       <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">Transfer of Access</h2>
                       <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                           Allows a transfer of information right when needed to the people who need it most:
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4">
                           {[
                             { label: "Spouse / Partner", icon: HeartHandshake },
                             { label: "Trustee", icon: FileCheck },
                             { label: "Executor", icon: Briefcase },
                             { label: "Children", icon: UserCheck }
                           ].map((item, i) => (
                               <motion.div 
                                  key={i} 
                                  whileHover={{ scale: 1.05, backgroundColor: '#f8fafc' }}
                                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-lg hover:border-brand-cyan/30 transition-all duration-300 cursor-default"
                               >
                                   <item.icon className="w-8 h-8 text-brand-cyan mb-1" />
                                   <span className="font-bold text-brand-navy text-sm text-center">{item.label}</span>
                               </motion.div>
                           ))}
                       </div>
                  </div>

                  {/* How It Works */}
                  <div className="relative h-full">
                    <SpotlightCard className="bg-brand-navy text-white p-6 md:p-10 rounded-[2.5rem] border border-brand-dark shadow-2xl relative overflow-hidden h-full flex flex-col justify-center" spotlightColor="rgba(255, 255, 255, 0.1)">
                         <div className="absolute top-0 right-0 p-8 opacity-5">
                             <FileKey className="w-40 h-40" />
                         </div>
                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                            <Key className="w-6 h-6 text-brand-cyan" />
                         </div>
                         <h3 className="font-display text-3xl font-bold mb-6 relative z-10">How It Works</h3>
                         <div className="space-y-6 relative z-10 text-zinc-300">
                             <p className="leading-relaxed text-lg">
                                 At time of need, passwords and login information will be shared so all documents can be easily accessed anywhere in the world. If desired, multiple computer copies can be made to allow more than one party to access accounts and personal information.
                             </p>
                             <div className="bg-white/5 p-6 rounded-xl border-l-4 border-brand-cyan backdrop-blur-sm">
                                <p className="leading-relaxed italic text-white font-medium">
                                    "This allows trustees, children and other responsible parties to pick up right where you left off. The gift of organization is the ultimate final gift one can receive."
                                </p>
                             </div>
                         </div>
                    </SpotlightCard>
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 6. BROKER COST (Core Content) --- */}
      <Section className="bg-zinc-50 relative border-t border-zinc-200 pb-32">
          {/* Background Gradient Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.05),_transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-16">
                  <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4 block">Transparency</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-8">Broker Cost Structure</h2>
                  
                  {/* Glowing 100% Banner */}
                  <div className="relative group inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative px-8 py-4 bg-brand-navy text-white rounded-xl font-bold text-lg shadow-xl flex items-center gap-3 border border-white/10">
                          <span className="flex h-3 w-3 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
                          </span>
                          100% of Computers Paid for by the Broker Dealer
                      </div>
                  </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  {/* Annual Cost Card */}
                  <SpotlightCard className="bg-white p-6 md:p-10 rounded-[2rem] border border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
                      <div className="flex items-center gap-6 mb-8">
                          <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy shadow-sm border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                              <RefreshCw className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-4xl font-bold text-brand-navy">$200</h3>
                              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Annual Cost Per Computer</span>
                          </div>
                      </div>
                      <p className="text-zinc-600 mb-8 flex-grow text-lg leading-relaxed">
                          Paid for by Broker/Client for security updates, encryption, EDR, administration and access to assist clients.
                      </p>
                      <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm font-semibold text-brand-navy flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan" /> Full Security Suite Included
                      </div>
                  </SpotlightCard>

                  {/* Setup Charge Card */}
                  <SpotlightCard className="bg-white p-6 md:p-10 rounded-[2rem] border border-zinc-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
                      <div className="flex items-center gap-6 mb-8">
                          <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-cyan shadow-sm border border-zinc-100 group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300">
                              <PenTool className="w-8 h-8" />
                          </div>
                          <div>
                              <h3 className="text-4xl font-bold text-brand-navy">$300</h3>
                              <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider">One Time Setup Charge</span>
                          </div>
                      </div>
                      <p className="text-zinc-600 mb-8 flex-grow text-lg leading-relaxed">
                          For the broker if they wish to customize laptops to have their logo on every client computer. This includes up to 2 hrs. of tech support if needed.
                      </p>
                      <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-sm font-semibold text-zinc-500 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Beyond that tech support is $150 hr.
                      </div>
                  </SpotlightCard>
              </div>

              {/* Hardware Details Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm hover:border-brand-navy/30 transition-all"
                  >
                      <h4 className="font-bold text-brand-navy mb-6 flex items-center gap-3 text-xl">
                          <div className="p-2 bg-brand-cyan/10 rounded-lg"><Monitor className="w-5 h-5 text-brand-cyan" /></div>
                          Replacement Computers
                      </h4>
                      <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              Market price of the computer at the time
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              <span><span className="font-bold text-brand-navy">$100</span> to reprogram computer</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              Market price to ship with options of overnight or ground
                          </li>
                      </ul>
                  </motion.div>

                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm hover:border-brand-navy/30 transition-all"
                  >
                      <h4 className="font-bold text-brand-navy mb-6 flex items-center gap-3 text-xl">
                          <div className="p-2 bg-brand-cyan/10 rounded-lg"><Users className="w-5 h-5 text-brand-cyan" /></div>
                          Additional Computers (Multiple Users)
                      </h4>
                      <ul className="space-y-4 text-sm text-zinc-600 font-medium">
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              Market cost of computer
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              <span><span className="font-bold text-brand-navy">$100</span> to program</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              <span><span className="font-bold text-brand-navy">$200</span> per year for all EDR ongoing updates and support</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-2"></div>
                              Market shipping price
                          </li>
                      </ul>
                  </motion.div>
              </div>
          </div>
      </Section>

    </div>
  );
};

export default Advisors;