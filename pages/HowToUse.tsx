import React from 'react';
import Section from '../components/Section';
import { PlayCircle, Clock, Film } from 'lucide-react';

const HowToUse: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-brand-navy pb-32 pt-20 relative overflow-hidden rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl">
         {/* Backgrounds */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-dark rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm shadow-lg">
                 <PlayCircle className="w-3 h-3" /> Tutorials
             </div>
             <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md">
                 FinWorld <br />Walkthrough Videos
             </h1>
             
             <div className="flex flex-col items-center justify-center gap-6">
                 <div className="px-8 py-3 bg-gradient-to-r from-brand-cyan to-blue-600 text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-brand-cyan/25 animate-pulse">
                     Coming Soon
                 </div>
                 <p className="text-zinc-300 max-w-lg mx-auto text-lg font-light">
                     Master the secure vault ecosystem with our upcoming step-by-step video guides.
                 </p>
             </div>
         </div>
      </div>

      {/* Content Placeholder */}
      <Section className="text-center">
          <div className="max-w-2xl mx-auto py-12">
              <div className="relative w-32 h-32 mx-auto mb-10">
                  <div className="absolute inset-0 bg-brand-cyan/10 rounded-full animate-ping"></div>
                  <div className="relative bg-white rounded-full w-32 h-32 flex items-center justify-center border border-zinc-200 shadow-xl">
                      <Film className="w-12 h-12 text-brand-navy" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-brand-navy text-white p-2 rounded-full border-4 border-white">
                      <Clock className="w-5 h-5" />
                  </div>
              </div>
              
              <h2 className="text-3xl font-bold text-brand-navy mb-6 font-display">Production In Progress</h2>
              <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                  Our team is currently filming comprehensive guides to help you navigate the FinWorld ecosystem. 
                  Check back soon for detailed tutorials on:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                  {[
                      "Setting up your Secure Device",
                      "Navigating the Intranet Portal",
                      "Executing Transfer of Access",
                      "Managing Beneficiary Permissions"
                  ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                          <div className="w-2 h-2 rounded-full bg-brand-cyan"></div>
                          <span className="font-bold text-zinc-700 text-sm">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
      </Section>
    </div>
  );
};

export default HowToUse;