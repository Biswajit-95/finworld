import React from 'react';
import Section from '../components/Section';
import SpotlightCard from '../components/SpotlightCard';

const teamMembers = [
  {
    name: 'Mark Gremler',
    role: 'CEO',
    bio: '30 years as a financial planner and visionary of FinWorld.',
  },
  {
    name: 'Scott Pappan',
    role: 'CTO',
    bio: 'State of Iowa cyber security with over 25 years of developing technology.',
  },
  {
    name: 'Pat Brogan',
    // role: 'Executive',
    bio: 'Silicon Valley Tech Executive with over 30 years in cyber security.',
  },
  {
    name: 'Gary Harms',
    // role: 'Operations & Management',
    bio: '35 years of financial services operations and management.',
  },
  {
    name: 'Chris Proskey',
    // role: 'Patent Attorney',
    bio: 'Expert in intellectual property and patent law protection.',
  },
  {
    name: 'Brian Bierstedt',
    // role: 'Process Development',
    bio: '25 years of financial services industry in process development.',
  },
  {
    name: 'Zach Jakalski',
    // role: 'Tech Lead',
    bio: 'Double masters in computer finance and programming.',
  },
  {
    name: 'Aaron Gremler',
    // role: 'Financial Planner',
    bio: 'Financial Planner and original implementer for FinWorld.',
  }
];

const Team: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-brand-navy pb-24 pt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm">
                Leadership
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Meet the Experts</h1>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                The visionaries, security experts, and financial leaders behind FinWorld's secure legacy platform.
            </p>
        </div>
      </div>

      {/* --- TEAM GRID --- */}
      <Section className="bg-zinc-50 -mt-20 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => {
                  const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                  return (
                    <SpotlightCard 
                        key={idx} 
                        className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden hover:border-brand-cyan transition-all duration-300 group flex flex-col h-full"
                        spotlightColor="rgba(0, 144, 212, 0.1)"
                    >
                        <div className="relative aspect-square overflow-hidden bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy transition-colors duration-500">
                             <span className="text-4xl md:text-5xl font-display font-bold text-brand-navy group-hover:text-white transition-colors duration-500 tracking-tighter">
                                {initials}
                             </span>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-brand-navy mb-1 group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                            <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">{member.role}</p>
                            <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                                {member.bio}
                            </p>
                        </div>
                    </SpotlightCard>
                  );
              })}
          </div>
      </Section>
      
      {/* --- JOIN CTA --- */}
      <Section className="bg-white border-t border-zinc-200">
          <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-navy mb-6">Driven by Security & Legacy</h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                  Our team combines decades of experience in high-level cybersecurity, financial planning, and technology development to ensure your legacy remains secure forever.
              </p>
              <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full"></div>
          </div>
      </Section>

    </div>
  );
};

export default Team;