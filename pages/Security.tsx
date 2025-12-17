import React from 'react';
import Section from '../components/Section';
import { ShieldAlert, Lock, Server, Cpu, Globe, Key, Layers, ShieldCheck, Wifi, UserCheck } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <div className="bg-zinc-50">
      {/* Top Section */}
      <div className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-brand-navy text-white text-center rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl overflow-hidden">
         {/* Backgrounds */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80 pointer-events-none z-0"></div>
        
        {/* Content with high Z-Index */}
        <div className="relative z-30 px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-sm animate-pulse-slow">
                <ShieldAlert className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-white drop-shadow-lg tracking-tight">Defense in Depth</h1>
            <p className="text-xl md:text-2xl text-zinc-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md opacity-95">
              We employ a multi-layered security approach combining hardware isolation, patented network architecture, and military-grade encryption to safeguard your vital data.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
                <span className="px-5 py-2.5 bg-brand-dark/60 rounded-lg border border-brand-cyan/40 text-sm font-bold uppercase tracking-widest text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all cursor-default backdrop-blur-md shadow-lg">Compliance Standards</span>
                <span className="px-5 py-2.5 bg-brand-dark/60 rounded-lg border border-brand-cyan/40 text-sm font-bold uppercase tracking-widest text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all cursor-default backdrop-blur-md shadow-lg">Firewall Defense</span>
                <span className="px-5 py-2.5 bg-brand-dark/60 rounded-lg border border-brand-cyan/40 text-sm font-bold uppercase tracking-widest text-brand-cyan hover:bg-brand-cyan hover:text-white transition-all cursor-default backdrop-blur-md shadow-lg">Endpoint Security</span>
            </div>
        </div>
      </div>

      {/* FinWorld Intranets - Detailed Definitions */}
      <Section className="bg-white border-b border-zinc-200 mt-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-16 text-center">FinWorld Intranet Architecture</h2>
            <div className="grid md:grid-cols-3 gap-8 px-2">
                {/* Intranet */}
                <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 hover:border-brand-cyan hover:bg-white hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-14 h-14 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-brand-cyan group-hover:bg-brand-navy group-hover:text-white transition-all">
                        <Server className="w-7 h-7 text-brand-navy group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4 transition-colors">Intranet</h3>
                    <p className="text-zinc-600 leading-relaxed text-base">
                        A private, online, internal communications network accessible <strong>only</strong> to FinWorld broker dealers, brokers, and their clients.
                    </p>
                </div>

                {/* Extranet */}
                <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 hover:border-brand-cyan hover:bg-white hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-14 h-14 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-brand-cyan group-hover:bg-brand-navy group-hover:text-white transition-all">
                        <Globe className="w-7 h-7 text-brand-navy group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4 transition-colors">Extranet</h3>
                    <p className="text-zinc-600 leading-relaxed text-base">
                        A closed private network only accessible to select external parties that FinWorld validates are safe and linked for direct communication.
                    </p>
                </div>

                {/* Portal */}
                <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 hover:border-brand-cyan hover:bg-white hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="w-14 h-14 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-brand-cyan group-hover:bg-brand-navy group-hover:text-white transition-all">
                        <Layers className="w-7 h-7 text-brand-navy group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4 transition-colors">Portal</h3>
                    <p className="text-zinc-600 leading-relaxed text-base">
                        A closed private network only accessible to select external parties that FinWorld validates are safe. It acts as the gateway cryptographically locked to the physical device.
                    </p>
                </div>
            </div>
          </div>
      </Section>

      {/* Intranet Security & Defense Layers */}
      <Section className="bg-zinc-50">
        <div className="grid lg:grid-cols-12 gap-16 px-2">
             <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold text-brand-navy mb-6">FinWorld Intranet Security</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                    We restrict access to sensitive information using a series of integrated role-based files and page permissions. Information access is strictly controlled by a 4-point validation system:
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                        { label: "IP Address Validation", icon: Globe },
                        { label: "Hardware Device ID", icon: Cpu },
                        { label: "Verified Username", icon: UserCheck },
                        { label: "Strong Encryption", icon: Key }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-3 hover:border-brand-cyan hover:shadow-md transition-all">
                            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-brand-navy">
                                <item.icon className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-zinc-700 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex gap-4 items-start shadow-sm relative overflow-hidden group hover:shadow-lg hover:border-red-200 transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <ShieldAlert className="w-24 h-24 text-red-900" />
                    </div>
                    <ShieldAlert className="w-8 h-8 text-red-500 flex-shrink-0 mt-1 relative z-10" />
                    <div className="relative z-10">
                        <h4 className="font-bold text-red-900 mb-1 text-lg">Remote Wipe Protocol</h4>
                        <p className="text-sm text-red-800/80 leading-relaxed">
                            In the event a device is stolen or misplaced, that device can be remotely wiped and replaced to prevent unauthorized data access.
                        </p>
                    </div>
                </div>
             </div>

             <div className="lg:col-span-7">
                 <h2 className="text-3xl font-bold text-brand-navy mb-8">Technical Specifications</h2>
                 <div className="grid sm:grid-cols-2 gap-5">
                     {[
                        { title: 'Encryption', desc: 'DES-AES256 standards (Same-key concept).', icon: Lock },
                        { title: 'Firewall', desc: 'Robust barrier between intranet and internet.', icon: Server },
                        { title: 'Endpoint Security', desc: 'Advanced threat protection against modern malware.', icon: ShieldCheck },
                        { title: 'EDR', desc: 'Real-time Endpoint Detection and Response tools.', icon: Cpu },
                        { title: 'Access Control', desc: 'Multi-factor authentication via hardware token.', icon: Key },
                        { title: 'Network Isolation', desc: 'Air-gapped architecture for critical data.', icon: Wifi },
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-cyan/10 group hover:border-brand-cyan">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="h-2 w-2 rounded-full bg-zinc-200 group-hover:bg-brand-cyan transition-colors"></div>
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-500 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                 </div>
             </div>
        </div>
      </Section>
    </div>
  );
};

export default Security;