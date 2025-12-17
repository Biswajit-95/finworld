import React from 'react';
import Section from '../components/Section';
import { Briefcase, User, CheckCircle, ArrowRight, Share2, Globe, FileKey } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50">
       <div className="bg-brand-navy py-24 text-center px-4 border-b border-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 relative z-10">Our Specialization</h1>
        <p className="text-zinc-200 text-xl max-w-3xl mx-auto font-light leading-relaxed relative z-10">
            FinWorld provides a secure device accessible solely through our intranet portal to view and manage important personal wealth, assets, and essential documents.
        </p>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
            {/* Retail Client */}
            <div className="relative group transition-all duration-300 hover:-translate-y-3">
                <div className="absolute inset-0 bg-brand-cyan/20 transform rotate-1 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:rotate-2 transition-all duration-500 blur-sm"></div>
                <div className="relative bg-white p-6 md:p-10 rounded-3xl border border-zinc-200 shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,144,212,0.15)] group-hover:border-brand-cyan h-full flex flex-col z-10 transition-colors duration-300">
                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 border border-zinc-200 shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                        <User className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">Retail Client</h2>
                    <p className="text-zinc-600 mb-8 leading-relaxed font-medium">
                        This is a digital vault combined with a secured device to safeguard private information. It is an easy way to transfer all your important data to your heirs when they will need it most with our simple <strong>transfer of access</strong> form.
                    </p>
                    
                    <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-8 group-hover:border-brand-cyan/20 transition-colors">
                        <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                            <Share2 className="w-5 h-5 text-brand-cyan" /> Transfer of Access
                        </h3>
                        <p className="text-sm text-zinc-600 mb-4">
                            Allows a transfer of information right when needed to the people who need it most:
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2 text-sm font-semibold text-zinc-700"><CheckCircle className="w-4 h-4 text-emerald-500" /> Spouse / Partner</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-zinc-700"><CheckCircle className="w-4 h-4 text-emerald-500" /> Trustee</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-zinc-700"><CheckCircle className="w-4 h-4 text-emerald-500" /> Executor</li>
                            <li className="flex items-center gap-2 text-sm font-semibold text-zinc-700"><CheckCircle className="w-4 h-4 text-emerald-500" /> Children</li>
                        </ul>
                    </div>

                    <div className="mt-auto">
                         <h4 className="font-bold text-brand-navy mb-2">How It Works</h4>
                         <p className="text-sm text-zinc-600 mb-6">
                             At time of need, passwords and login information will be shared so all documents can be easily accessed anywhere in the world.
                         </p>
                        <Link to="/pricing" className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold text-center block hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-navy/20">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </div>

             {/* Broker & Dealer */}
             <div className="relative group transition-all duration-300 hover:-translate-y-3">
                <div className="absolute inset-0 bg-brand-dark transform -rotate-1 rounded-3xl opacity-0 group-hover:opacity-100 group-hover:-rotate-2 transition-all duration-500 blur-sm"></div>
                <div className="relative bg-brand-navy p-6 md:p-10 rounded-3xl border border-brand-dark shadow-xl group-hover:shadow-[0_20px_50px_rgba(0,144,212,0.15)] group-hover:border-brand-cyan h-full flex flex-col text-white z-10 transition-colors duration-300">
                    <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-8 border border-white/10 shadow-inner group-hover:bg-white group-hover:text-brand-navy transition-colors duration-300">
                        <Briefcase className="w-8 h-8 text-white group-hover:text-brand-navy transition-colors" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Broker & Dealer</h2>
                    <p className="text-zinc-300 mb-8 leading-relaxed font-medium">
                        FinWorld offers financial industry leaders a tool to support their customers in a secure, easy way. Broker dealers use FinWorld to engage brokers with targeted, patented, secure, customized and unique devices exclusive to the relationship.
                    </p>
                    
                    <div className="space-y-4 mb-10 flex-grow">
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-brand-cyan/50">
                            <Globe className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white">Administrator Panel</h4>
                                <p className="text-sm text-zinc-400">Each broker dealer has the ability to select services and choose what works for them.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-brand-cyan/50">
                            <FileKey className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-white">Client Collaboration</h4>
                                <p className="text-sm text-zinc-400">Help clients organize information, access accounts and collaborate in a secure environment.</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/contact" className="w-full py-4 bg-white text-brand-navy rounded-xl font-bold text-center hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/10 hover:shadow-white/20">
                        Contact for Access <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;