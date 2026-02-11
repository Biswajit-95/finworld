import React from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import ActiveDefense from '../components/ActiveDefense';
import { Shield, Key, ChevronRight, Lock, Activity, Layers, ArrowRight, Server, Globe, AlertTriangle, CheckCircle2, UserX, UserCheck, HardDrive, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Globe1 from '@/components/Globe';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* --- HERO SECTION --- */}
      {/* <div className="relative min-h-[100dvh] flex flex-col pt-24 lg:pt-32 pb-10 overflow-hidden bg-zinc-50">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.1),_transparent_40%)] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none"></div>

        <HeroCanvas />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col justify-start lg:justify-center mt-[55vh] lg:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl pt-8 lg:pt-0"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,144,212,0.15)] text-brand-navy text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                </span>
                System Operational
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-navy mb-6 md:mb-8 tracking-tighter leading-[1.05] drop-shadow-sm">
                The Digital Vault <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-navy">For Your Legacy.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-600 mb-6 max-w-lg font-medium leading-relaxed">
                FinWorld offers financial industry leaders a tool to support their customers in a secure, easy way.
              </p>
              <p className="hidden md:block text-zinc-500 mb-10 max-w-lg leading-relaxed text-sm border-l-2 border-brand-cyan pl-4">
                FinWorld’s purpose is to enhance and simplify the use of technology in the collection of personal data in a safe, simple and secure manner.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link to="/product" className="group relative px-8 py-3.5 md:py-4 bg-brand-navy text-white rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-navy/30 transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-navy">
                  <div className="absolute inset-0 w-full h-full bg-brand-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    View Products <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                  </span>
                </Link>
                <Link to="/about" className="px-8 py-3.5 md:py-4 bg-white border border-zinc-300 text-brand-navy rounded-xl hover:bg-zinc-50 hover:border-brand-navy hover:text-brand-navy transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <div className="hidden lg:block h-[500px]"></div>

          </div>
        </div>
      </div> */}
      <div className="relative min-h-[100dvh] flex flex-col pt-24 lg:pt-16 pb-10 overflow-hidden bg-zinc-50">

{/* Background Gradients */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,144,212,0.1),_transparent_40%)] pointer-events-none z-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none"></div>

{/* Globe Layer */}
<div className="absolute inset-0 z-0 flex items-start lg:items-center justify-center lg:justify-end pointer-events-none">
  <div className="relative w-full h-[420px] sm:w-[520px] sm:h-[520px] lg:w-[620px] lg:h-[620px] lg:mr-16">

    {/* Glow halo behind globe */}
    <div className="absolute inset-0 rounded-full blur-3xl bg-brand-cyan/10"></div>

    <Globe1 />
  </div>
</div>

{/* Main Content */}
<div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex-grow flex flex-col justify-start lg:justify-center mt-[33vh] md:mt-[38vh] lg:mt-0">
  <div className="grid lg:grid-cols-2 gap-12 items-center h-full">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-2xl pt-8 lg:pt-0"
    >

      {/* Status Badge (Flicker-free version) */}
      <div
        className="relative inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand-cyan/30 shadow-[0_0_15px_rgba(0,144,212,0.15)] text-brand-navy text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 transform-gpu will-change-transform"
        style={{ isolation: "isolate" }}
      >

        {/* Stable background layer instead of backdrop-blur */}
        <div className="absolute inset-0 rounded-full bg-white/90"></div>

        {/* Content */}
        <div className="relative flex items-center gap-3">

          {/* Status indicator */}
 <span className="relative flex h-2.5 w-2.5 overflow-hidden rounded-full">
    
 {/* Ripple — disabled on small screens to prevent flicker */}
 <span className="hidden sm:inline-flex animate-ping absolute inset-0 rounded-full bg-brand-cyan opacity-60"></span>
 
 {/* Solid dot */}
 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>

</span>

          System Operational
        </div>
      </div>

      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-navy mb-6 md:mb-8 tracking-tighter leading-[1.05] drop-shadow-sm">
        The Digital Vault <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-navy">
          For Your Legacy.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-zinc-600 mb-6 max-w-lg font-medium leading-relaxed">
        FinWorld offers financial industry leaders a tool to support their customers in a secure, easy way.
      </p>

      <p className="hidden md:block text-zinc-500 mb-10 max-w-lg leading-relaxed text-sm border-l-2 border-brand-cyan pl-4">
        FinWorld’s purpose is to enhance and simplify the use of technology in the collection of personal data in a safe, simple and secure manner.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
        <Link
          to="/product"
          className="group relative px-8 py-3.5 md:py-4 bg-brand-navy text-white rounded-xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-navy/30 transition-all duration-300 transform hover:-translate-y-1 text-center border border-brand-navy"
        >
          <div className="absolute inset-0 w-full h-full bg-brand-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative flex items-center justify-center gap-2">
            View Products
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>

        <Link
          to="/about"
          className="px-8 py-3.5 md:py-4 bg-white border border-zinc-300 text-brand-navy rounded-xl hover:bg-zinc-50 hover:border-brand-navy hover:text-brand-navy transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
        >
          Learn More
        </Link>
      </div>
    </motion.div>

    {/* Right Placeholder */}
    <div className="hidden lg:block h-[500px]"></div>

  </div>
</div>
</div>



      {/* --- STATS / TICKER --- */}
      <div className="border-y border-brand-navy/10 bg-white overflow-hidden py-5 relative z-20 shadow-sm">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="flex items-center gap-3 text-sm font-mono text-brand-navy font-bold tracking-tight uppercase opacity-80 hover:opacity-100 transition-opacity">
               <Activity className="w-4 h-4 text-brand-cyan" /> AES-256_ENCRYPTION_ACTIVE
               <span className="mx-2 text-zinc-300">///</span>
               <Lock className="w-4 h-4 text-brand-navy" /> ISOLATION_PROTOCOL_READY
             </div>
           ))}
        </div>
      </div>

      {/* --- 1. THREAT CONTEXT (Why Is This Important?) --- */}
      <Section className="!bg-gradient-to-b from-brand-navy to-brand-dark !text-white overflow-hidden relative border-y border-zinc-800">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
             <div>
                <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 font-bold text-xs uppercase tracking-widest mb-6 animate-pulse">
                    Critical Alert
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-white">
                  Why Is This <br/><span className="text-zinc-500">Important?</span>
                </h2>
                <div className="mb-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <p className="text-white mb-4 font-light text-2xl leading-relaxed">
                      Personal attacks are up over <span className="text-red-500 font-bold">100%</span> on the 55-plus population as of 2023.
                  </p>
                  <p className="text-zinc-400 font-medium italic border-l-2 border-red-500 pl-4 text-sm">
                      This group of people are targeted because they have the money and are not as computer savvy.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Old Targets */}
                    <div className="p-6 rounded-2xl bg-brand-dark border border-white/10 hover:bg-white/5 transition-colors group">
                         <div className="flex items-center gap-2 mb-4">
                            <UserX className="w-5 h-5 text-zinc-500" />
                            <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Old Targets</h3>
                         </div>
                         <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Hospitals</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Oil Companies</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Big Companies</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div> Ransomware for crypto</li>
                         </ul>
                    </div>
                    {/* New Targets */}
                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/30 relative overflow-hidden group hover:bg-red-950/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105 shadow-lg">
                         <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                         <div className="flex items-center gap-2 mb-4 relative z-10">
                            <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
                            <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs">Current Targets</h3>
                         </div>
                         <ul className="space-y-3 text-white font-bold text-sm relative z-10">
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Mom and Dad</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Grandma and Grandpa</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Great Grandma</li>
                             <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> Grandpa crypto</li>
                         </ul>
                    </div>
                </div>
             </div>
             
             {/* Right Column: Active Defense Visual */}
             <div className="relative h-full flex items-center">
                 <div className="relative h-[300px] md:h-[400px] w-full bg-zinc-950 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10 mt-8 md:mt-0 shadow-black group hover:shadow-brand-cyan/20 transition-all duration-500">
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500 group-hover:animate-pulse"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                        <span className="text-xs font-mono text-zinc-500 group-hover:text-brand-cyan transition-colors">LIVE_THREAT_MONITOR</span>
                    </div>
                    
                    <div className="flex-grow relative">
                        <ActiveDefense />
                        
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between bg-zinc-900/80 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                            <div>
                                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Status</span>
                                <span className="block text-emerald-500 font-bold font-mono text-lg">SECURE</span>
                            </div>
                            <div className="text-right">
                                 <span className="block text-[10px] text-zinc-500 uppercase tracking-wider">Threats Blocked</span>
                                <span className="block text-white font-bold font-mono text-lg">99.9%</span>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </Section>

      {/* --- 2. FINWORLD INTRANETS (Definitions) --- */}
      <Section className="bg-white">
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">FinWorld Intranets</h2>
            <div className="w-20 h-1 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Intranet */}
            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-6 md:p-8 flex flex-col h-full hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                    <Server className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors">INTRANET</h3>
                <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                    A private, online, internal communications network accessible <strong>only</strong> to FinWorld broker dealers, brokers and their clients.
                </p>
            </SpotlightCard>

            {/* Extranet */}
            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-6 md:p-8 flex flex-col h-full hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                    <Globe className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors">EXTRANET</h3>
                <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                    A closed private network only accessible to select external parties that FinWorld validates are safe and linked for direct communication and collaboration for the broker, broker dealer and end user.
                </p>
            </SpotlightCard>

            {/* Portal */}
            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-6 md:p-8 flex flex-col h-full hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                    <Layers className="w-7 h-7 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors">PORTAL</h3>
                <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                    A closed private network only accessible to select external parties that FinWorld validates are safe and linked for direct communication and collaboration for the broker, broker dealer and end user.
                </p>
            </SpotlightCard>
        </div>
      </Section>

      {/* --- 3. SPECIALIZATION & SECURITY --- */}
      <Section className="bg-zinc-50 border-y border-zinc-200">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Specialization */}
              <div className="group">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase mb-6 border border-brand-cyan/20">
                     <Shield className="w-4 h-4" /> Our Specialization
                  </div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-6 group-hover:text-brand-cyan transition-colors">The Secure Device & Vault</h2>
                  <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:border-brand-cyan/30">
                          <p className="font-medium text-lg leading-relaxed text-zinc-700">
                              FinWorld provides a secure device accessible solely through our intranet portal to view and manage important personal wealth, assets and essential documents.
                          </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:border-brand-cyan/30 delay-100">
                          <p className="leading-relaxed text-zinc-600">
                              This is a digital vault combined with a secured device to safeguard private information and is an easy way to transfer all your important data to your heirs when they will need it most with our simple <strong>transfer of access form</strong>.
                          </p>
                      </div>
                  </div>
              </div>

              {/* Security */}
              <div className="group">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase mb-6 border border-red-200">
                     <Lock className="w-4 h-4" /> Intranet Security
                  </div>
                  <h2 className="text-3xl font-bold text-brand-navy mb-6 group-hover:text-brand-cyan transition-colors">Access Control & Safety</h2>
                  <div className="space-y-6">
                      <div className="flex gap-4 p-5 rounded-2xl bg-white border border-zinc-200 hover:border-brand-navy hover:bg-brand-navy hover:text-white hover:shadow-xl transition-all duration-300 group/item cursor-default shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-brand-navy flex-shrink-0 flex items-center justify-center text-white mt-1 shadow-lg shadow-brand-navy/20 group-hover/item:bg-white group-hover/item:text-brand-navy group-hover/item:scale-110 transition-all duration-300">
                              <Key className="w-5 h-5" />
                          </div>
                          <div>
                              <h4 className="font-bold text-brand-navy mb-2 text-lg group-hover/item:text-white transition-colors">Restricted Access</h4>
                              <p className="text-zinc-600 text-sm leading-relaxed group-hover/item:text-zinc-200 transition-colors">
                                  We restrict access to sensitive information using a series of integrated role-based files and page permissions on a regular basis. Information can only be accessed by IP address, device, username and password.
                              </p>
                          </div>
                      </div>
                      
                      <div className="flex gap-4 p-5 rounded-2xl bg-white border border-zinc-200 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-xl transition-all duration-300 group/item cursor-default shadow-sm">
                          <div className="w-12 h-12 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center text-white mt-1 shadow-lg shadow-red-500/20 group-hover/item:bg-white group-hover/item:text-red-500 group-hover/item:scale-110 transition-all duration-300">
                              <AlertTriangle className="w-5 h-5" />
                          </div>
                          <div>
                              <h4 className="font-bold text-brand-navy mb-2 text-lg group-hover/item:text-white transition-colors">Remote Wipe Protocol</h4>
                              <p className="text-zinc-600 text-sm leading-relaxed group-hover/item:text-red-100 transition-colors">
                                  In the event a device is stolen or misplaced, that device can be remotely wiped and replaced.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 4. WHY FINWORLD? (Pain Points) --- */}
      {/* Redesigned with Zinc-950 Dark Theme and Grid Pattern for better aesthetics */}
      <Section className="!bg-zinc-950 !text-white relative overflow-hidden py-24">
         {/* Background Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-navy/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

         <div className="relative z-10 max-w-5xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Why FinWorld?</h2>
                 <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                    Over 30 years of financial planning seeing the same problem happening over and over.
                 </p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                 {[
                     { 
                       text: "Spouses struggling to take over and manage the family’s affairs after the death of a partner.", 
                       icon: UserX 
                     },
                     { 
                       text: "Children struggling to find everything needed to manage and settle an estate.", 
                       icon: Smartphone 
                     },
                     { 
                       text: "Out of state executors with limited time to find everything needed to manage and settle the estate.", 
                       icon: Globe 
                     },
                     { 
                       text: "Secure way to store sensitive documents and conduct financial business electronically.", 
                       icon: HardDrive 
                     }
                 ].map((item, i) => (
                     <div key={i} className="flex items-start gap-5 bg-zinc-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-cyan/50 hover:bg-zinc-800 hover:shadow-2xl hover:shadow-brand-cyan/10 hover:-translate-y-1 transition-all duration-300 group">
                         <div className="bg-white/5 p-3 rounded-xl group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300 border border-white/5">
                            <item.icon className="w-6 h-6 text-brand-cyan group-hover:text-white flex-shrink-0 transition-colors" />
                         </div>
                         <p className="text-zinc-300 font-medium leading-relaxed text-lg group-hover:text-white transition-colors">{item.text}</p>
                     </div>
                 ))}
             </div>
         </div>
      </Section>

      {/* --- 5. HOW IT WORKS --- */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="order-2 md:order-1">
                     <h2 className="font-display text-4xl font-bold text-brand-navy mb-8">How It Works</h2>
                     <div className="space-y-6 text-lg text-zinc-600">
                         <p className="leading-relaxed">
                            At time of need, passwords and login information will be shared so all documents can be easily accessed anywhere in the world. If desired, multiple computer copies can be made to allow more than one party to access accounts and personal information.
                         </p>
                         <div className="bg-brand-navy/5 p-8 rounded-2xl border-l-4 border-brand-cyan mt-8">
                             <p className="font-bold text-brand-navy italic text-xl">
                                "This allows trustees, children and other responsible parties to pick up right where you left off. The gift of organization is the ultimate final gift one can receive."
                             </p>
                         </div>
                     </div>
                 </div>
                 
                 <div className="order-1 md:order-2 grid gap-5">
                     {[
                        { title: "Passwords Shared Securely", icon: Key },
                        { title: "Global Document Access", icon: Globe },
                        { title: "Multiple Copies Available", icon: Layers },
                        { title: "Trustees Take Over Instantly", icon: UserCheck },
                     ].map((step, idx) => (
                         <div key={idx} className="group bg-white p-6 rounded-2xl border border-zinc-200 flex items-center gap-5 shadow-md hover:shadow-xl hover:shadow-brand-cyan/10 hover:border-brand-cyan hover:bg-zinc-50 transition-all duration-300 transform hover:-translate-y-1 cursor-default">
                             <div className="w-14 h-14 bg-zinc-100 rounded-full flex items-center justify-center text-brand-navy font-bold text-xl shadow-inner border border-zinc-200 group-hover:bg-brand-cyan group-hover:text-white group-hover:border-brand-cyan transition-all duration-300 group-hover:scale-110">
                                {idx + 1}
                             </div>
                             <div>
                                <h4 className="font-bold text-brand-navy text-lg group-hover:text-brand-cyan transition-colors">{step.title}</h4>
                             </div>
                             <step.icon className="w-6 h-6 text-zinc-300 ml-auto group-hover:text-brand-cyan transition-colors group-hover:rotate-12" />
                         </div>
                     ))}
                 </div>
             </div>
        </div>
      </Section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="py-24 md:py-32 px-4 bg-zinc-900 text-center relative overflow-hidden border-t border-zinc-800">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Secure Your Legacy.</h2>
           <p className="text-lg md:text-xl text-zinc-400 mb-10 font-light">Organization is the ultimate final gift.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contact" className="px-12 py-5 bg-white text-brand-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10 hover:bg-zinc-100 flex items-center justify-center gap-2 group">
               Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Link>
             <Link to="/pricing" className="px-12 py-5 bg-transparent border border-brand-cyan text-white font-bold rounded-full hover:bg-brand-cyan hover:border-brand-cyan transition-colors">
               View Pricing
             </Link>
           </div>
         </div>
      </section>
    </div>
  );
};

export default Home;