import React from 'react';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';
import { ShieldCheck, Globe, Server, Layers, AlertTriangle, Fingerprint, CheckCircle2, Monitor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50">
      
      {/* --- 1. HERO / ABOUT US --- */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase mb-6 shadow-sm">
                    About Us
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                    FinWorld offers financial industry leaders a tool to support their customers in a secure, easy way.
                </h1>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                    <p>
                        FinWorld provides a secure device accessible solely through our intranet portal to view and manage important personal wealth, assets and essential documents.
                    </p>
                    <div className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-brand-cyan">
                        <p className="font-medium text-brand-navy italic">
                            This is a digital vault combined with a secured device to safeguard private information and is an easy way to transfer all your important data to your heirs when they will need it most with our simple transfer of access form.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
                <div className="absolute inset-0 bg-brand-cyan/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-2 transition-transform duration-500 blur-sm"></div>
                {/* Updated: Cybersecurity Related Image (Digital Lock/Circuit) */}
                <img 
                    src="/about-hero-section.png" 
                    // src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Cybersecurity Digital Vault" 
                    className="relative rounded-3xl shadow-2xl border border-zinc-200 object-fill h-[300px] md:h-[450px] w-full transform group-hover:-translate-y-2 transition-transform duration-500"
                />
            </div>
        </div>
      </Section>

      {/* --- 2. WHY FINWORLD --- */}
      <Section className="bg-zinc-950 text-white relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center text-white tracking-tight">Why FinWorld?</h2>
            <p className="text-brand-cyan text-center mb-16 text-xl font-medium tracking-wide">Why the Need for FinWorld:</p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>
                
                <p className="text-white font-bold mb-10 text-xl md:text-2xl border-b border-white/10 pb-6 leading-relaxed">
                    Over 30 years of financial planning seeing the same problem happening over and over
                </p>
                
                <div className="grid gap-6">
                    {[
                        "Spouses struggling to take over and manage the family's affairs after the death of a partner",
                        "Children struggling to find everything needed to manage and settle an estate",
                        "Out of state executors with limited time to find everything needed to manage and settle the estate",
                        "Secure way to store sensitive documents and conduct financial business electronically"
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 group">
                            <div className="w-10 h-10 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center flex-shrink-0 font-bold text-lg shadow-inner group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                                {i + 1}
                            </div>
                            <p className="text-zinc-200 leading-relaxed text-lg font-light group-hover:text-white transition-colors">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Section>

      {/* --- 3. HOW SAFE IS IT? --- */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
             <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">How Safe Is It?</h2>
             <div className="w-24 h-1.5 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { title: "Compliance Standards", desc: "Best industry practices are followed, utilizing layered security protocols and top-of-class lines of defense." },
                { title: "Firewall Defense", desc: "Firewalls provide a protective barrier between the intranet and the internet." },
                { title: "EndPoint Security", desc: "Network security architecture that offers advanced threat protection. Discover, investigate, and respond to attacks on endpoints and servers." },
                { title: "Data Encryption Standard", desc: "The Data Encryption Standard (DES-AES256) uses a same-key concept to encrypt and decrypt a message – so both the sender and receiver must have access to the same private key." },
                { title: "Security Breaches", desc: "In the event of spam, phishing, spyware and malware, FinWorld utilizes various monitoring tools, and on-demand/on-event packet capture appliances exist to track details of the network." },
                { title: "Viruses – EDR", desc: "FinWorld incorporates endpoint detection and response security tools to secure our infrastructure and deliver real-time visibility, analysis, protection and remediation for endpoints." }
            ].map((item, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200 hover:border-brand-cyan hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300 group hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3 group-hover:text-brand-cyan transition-colors">
                        <ShieldCheck className="w-6 h-6 text-zinc-300 group-hover:text-brand-cyan transition-colors" /> {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* --- 4. MULTI-FACTOR LOGIN & SECURITY --- */}
      <Section className="bg-white border-y border-zinc-200">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 group h-[300px] md:h-[500px]">
                      <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/10 transition-colors duration-500 z-10"></div>
                      {/* Updated: Cybersecurity Lock/Circuit Image */}
                      <img 
                          src="/about-mulitfactor-loginsafety.png" 
                          alt="Multi-factor Security Lock" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-6 left-6 z-20 bg-zinc-900/90 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20 shadow-lg">
                          <span className="flex items-center gap-3 text-sm font-bold text-white">
                              <Fingerprint className="w-5 h-5 text-brand-cyan" /> 
                              <span>Authentication Protocol: <span className="text-brand-cyan">Active</span></span>
                          </span>
                      </div>
                  </div>
              </div>
              
              <div className="order-1 lg:order-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase mb-4">
                      Hardware & Network
                  </div>
                  <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">FinWorld Intranet Security</h2>
                  
                  <div className="space-y-6 text-zinc-600 text-lg">
                      <p className="leading-relaxed">
                          We restrict access to sensitive information using a series of integrated role-based files and page permissions on a regular basis. Information can only be accessed by IP address, device, username and password.
                      </p>
                      
                      <div className="bg-red-50 border border-red-100 p-6 rounded-2xl relative overflow-hidden group hover:shadow-lg transition-all">
                          <div className="relative z-10">
                            <h4 className="text-red-900 font-bold mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" /> Remote Wipe Protocol
                            </h4>
                            <p className="text-red-800/80 text-sm">
                                In the event a device is stolen or misplaced, that device can be remotely wiped and replaced instantly.
                            </p>
                          </div>
                      </div>

                      <div className="mt-8">
                          <h4 className="font-bold text-brand-navy mb-4 text-xl">FinWorld also leverages:</h4>
                          <ul className="space-y-4">
                              <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                  <div className="mt-1 bg-brand-cyan/10 p-1 rounded text-brand-cyan">
                                    <CheckCircle2 className="w-5 h-5" />
                                  </div>
                                  <span className="text-base font-medium">Encryption (AES or TLS 1.2(3) and Secure Socket Layer (SSL) technology.</span>
                              </li>
                              <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                                  <div className="mt-1 bg-brand-cyan/10 p-1 rounded text-brand-cyan">
                                    <CheckCircle2 className="w-5 h-5" />
                                  </div>
                                  <span className="text-base font-medium">VPN services incorporate End-to-End Encryption to ensure two-way communication</span>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 5. INTRANET TYPES --- */}
      <Section className="bg-zinc-50">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Different Types of FinWorld Intranets</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-8 h-full hover:border-brand-navy transition-all duration-500">
                <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-navy/20">
                    <Server className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">INTRANET</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                    A private, online, internal communications network accessible only to FinWorld broker dealers, brokers and their clients.
                </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-8 h-full hover:border-brand-cyan transition-all duration-500">
                <div className="w-14 h-14 bg-brand-cyan rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-cyan/20">
                    <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">EXTRANET</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                    A closed private network only accessible to select external parties that FinWorld validates are safe and linked for direct communication.
                </p>
            </SpotlightCard>

            <SpotlightCard className="bg-white border border-zinc-200 shadow-xl p-8 h-full hover:border-zinc-900 transition-all duration-500">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-zinc-900/20">
                    <Layers className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">PORTAL</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                    A gateway with a public-facing web page that allows the intranet/extranet to connect with broker dealers.
                </p>
                <div className="p-4 bg-zinc-100/80 rounded-xl text-xs text-zinc-600 font-semibold border-l-4 border-brand-cyan">
                    Access restricted to hardware ID + credentials.
                </div>
            </SpotlightCard>
        </div>
      </Section>

      {/* --- 6. TARGETS (Why Is This Important?) --- */}
      <Section className="bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0  opacity-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-start relative z-10">
              {/* Text Content */}
              <div>
                  <h2 className="font-display text-4xl font-bold mb-8">Why Is This Important?</h2>
                  <div className="mb-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-white mb-4 font-light text-2xl leading-relaxed">
                        Cyber-enabled attacks targeting adults aged 60+ are up over{" "}
                        <span className="text-red-500 font-bold">40%</span> as of 2026.
                    </p>

                    <p className="text-zinc-400 font-medium italic border-l-2 border-red-500 pl-4 text-sm space-y-2">
                        <span className="block">
                        Reported cyber-enabled losses for Americans age 60+ increased about
                        five-fold from 2020 to 2024 (from ~$966M to ~$4.8B).
                        </span>
                        <span className="block">
                        The number of IC3 complaints from adults age 60+ increased about
                        40% over the same period.
                        </span>
                    </p>

                    </div>

                  <div className="space-y-6">
                      <div className="flex gap-4 items-start p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
                           <div className="w-1 h-full min-h-[50px] bg-zinc-500 rounded-full"></div>
                           <div>
                                <h4 className="text-zinc-400 font-bold uppercase text-xs tracking-widest mb-3">Old Targets</h4>
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-zinc-300 text-sm">
                                    <li>• Hospitals</li>
                                    <li>• Oil companies</li>
                                    <li>• Big companies</li>
                                    <li>• Ransomware (Crypto)</li>
                                </ul>
                           </div>
                      </div>
                      
                      <div className="flex gap-4 items-start p-6 rounded-2xl bg-red-950/20 border border-red-500/30 hover:bg-red-950/30 hover:border-red-500/50 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                           <div className="w-1 h-full min-h-[50px] bg-red-500 rounded-full animate-pulse"></div>
                           <div>
                                <h4 className="text-red-400 font-bold uppercase text-xs tracking-widest mb-3">New Targets</h4>
                                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-white font-bold text-sm">
                                    <li>• Mom and Dad</li>
                                    <li>• Grandma & Grandpa</li>
                                    <li>• Great Grandma</li>
                                    <li>• Non-Tech Savvy</li>
                                </ul>
                           </div>
                      </div>
                  </div>
              </div>

              {/* Images Column */}
              <div className="flex flex-col gap-6 pt-8">
                  {/* Old Target Image - Corporate/Industry */}
                  <div className="relative group overflow-hidden rounded-2xl border border-zinc-700 shadow-2xl">
                       <div className="absolute top-4 right-4 z-10 bg-black/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">Old Targets</div>
                       <img 
                          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                          alt="Corporate Skyscrapers" 
                          className="w-full h-48 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                  </div>

                  {/* New Target Image - Elderly Couple with Laptop - FIXED & WORKING */}
                  <div className="relative group overflow-hidden rounded-2xl border-2 border-red-500/50 shadow-2xl shadow-red-900/20">
                       <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">New Targets</div>
                       <img 
                          src="/new-targets.png" 
                          alt="Elderly couple using laptop safely" 
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                  </div>
              </div>
          </div>
      </Section>

      {/* --- 7. WHAT DOES IT LOOK LIKE --- */}
      <Section className="bg-white mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative group">
                    <div className="absolute inset-0 bg-brand-navy rounded-3xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                    {/* Updated: Padlock on Laptop Keyboard (Cybersecurity Key) */}
                    <img 
                        src="/about-whatdoesitlooklike.png" 
                        alt="Laptop with Security Key Lock Overlay" 
                        className="relative rounded-3xl border border-zinc-200 shadow-xl w-full h-[300px] md:h-[400px] object-cover"
                    />
               </div>
               
               <div className="order-1 lg:order-2">
                   <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">What Does It Look Like?</h2>
                   <p className="text-xl text-zinc-600 mb-8 font-light leading-relaxed">
                       The FinWorld intranet look and feel is simple – and that’s the intent. Our goal is to have a simple user interface to provide an easy and secure environment to access and conduct financial business.
                   </p>
                   
                   <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 hover:border-brand-cyan transition-colors duration-300">
                       <div className="flex items-center gap-4 mb-4">
                           <div className="p-3 bg-brand-cyan/10 rounded-xl text-brand-cyan">
                                <Monitor className="w-6 h-6" />
                           </div>
                           <h4 className="font-bold text-brand-navy text-lg">No one-size-fits-all intranet solution:</h4>
                       </div>
                       <p className="text-zinc-600 text-base leading-relaxed pl-1">
                           Each broker dealer has the ability to select services and choose what works for them via an administrator panel.
                       </p>
                   </div>
               </div>
          </div>
      </Section>

    </div>
  );
};

export default About;