import React, { useState } from 'react';
import Section from '../components/Section';
import { ChevronDown, ChevronUp, HelpCircle, Shield, CreditCard, Users, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface FaqCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  questions: { q: string; a: string }[];
}

const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    title: 'General & Mission',
    icon: HelpCircle,
    questions: [
      {
        q: "What is FinWorld's primary mission?",
        a: "FinWorld's purpose is to enhance and simplify the use of technology in the collection of personal data in a safe, simple, and secure manner. We provide a digital vault combined with a secured device to safeguard private information and facilitate generational wealth transfer."
      },
      {
        q: "Why is this specific to the 55+ demographic?",
        a: "Statistics show that personal cyber attacks on the 55-plus population have increased by over 100% as of 2023. This group is often targeted because they typically hold significant assets. FinWorld reduces this risk by removing the technical complexity of security."
      },
      {
        q: "What is the difference between the Intranet, Extranet, and Portal?",
        a: "The **Intranet** is our private internal communications network. The **Extranet** connects verified external parties. The **Portal** is the secure gateway accessible *only* via the FinWorld hardware device that bridges you to these networks."
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Hardware',
    icon: Shield,
    questions: [
      {
        q: "Why do I need a separate 'FinWorld Secured Device'?",
        a: "Using a personal computer for both financial management and daily activities (like social media or email) creates vulnerability. The FinWorld device is 'air-gapped' from these risks, meaning it is a dedicated vessel optimized strictly for the secure portal with no casual browsing allowed."
      },
      {
        q: "What security standards do you utilize?",
        a: "We employ a defense-in-depth strategy including military-grade AES-256 encryption, a 4-point access validation system (IP address, Device ID, Username, Password), and real-time Endpoint Detection and Response (EDR) to block modern malware."
      },
      {
        q: "What happens if the device is lost or stolen?",
        a: "Our devices feature a **Remote Wipe Protocol**. If a device is misplaced, we can instantly scrub its data remotely to ensure unauthorized parties cannot access your vault. A replacement device can then be issued."
      },
      {
        q: "Can I use the device for Facebook or personal email?",
        a: "No. To maintain the integrity of the 'clean' environment, the device is restricted from general web browsing, social media, and gaming. It is a dedicated tool for your financial legacy."
      }
    ]
  },
  {
    id: 'legacy',
    title: 'Legacy & Access',
    icon: Users,
    questions: [
      {
        q: "How does the 'Transfer of Access' work?",
        a: "This protocol ensures continuity. At the time of need (incapacitation or death), passwords and secure login credentials are shared with your pre-designated beneficiaries (Spouse, Trustee, Executor, or Children), allowing them to access documents and manage affairs immediately."
      },
      {
        q: "Can multiple people access the vault?",
        a: "Yes. You can purchase additional secure computers for multiple users (e.g., partners or trustees). Each device is subject to the hardware cost plus a $100 programming fee and the annual security service fee."
      },
      {
        q: "Who can be a designated beneficiary?",
        a: "Common designees include your Spouse/Partner, Trustee, Executor, or adult Children. This ensures the right people have access exactly when they need it, avoiding probate delays due to lost information."
      }
    ]
  },
  {
    id: 'pricing',
    title: 'Pricing & Costs',
    icon: CreditCard,
    questions: [
      {
        q: "What is the cost for Retail Clients?",
        a: "The FinWorld Secured Device is sold at market price (approx. $1,999.99). There is an ongoing annual service fee of $200 which covers security updates, encryption maintenance, EDR monitoring, and administration."
      },
      {
        q: "How does pricing work for Broker Dealers?",
        a: "Typically, Broker Dealers cover 100% of the computer cost. The annual service fee is $200 per device. There is also a one-time setup charge of $300 for logo customization and initial tech support."
      },
      {
        q: "What is the hardware replacement policy?",
        a: "We believe in transparency. If a device needs replacement, you pay the current market price of the laptop + a $100 reprogramming fee + shipping. There are no hidden markups."
      }
    ]
  }
];

const AccordionItem: React.FC<{ q: string; a: string; isOpen: boolean; onClick: () => void }> = ({ q, a, isOpen, onClick }) => {
  return (
    <div className={`border rounded-2xl bg-white mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-cyan shadow-md' : 'border-zinc-200 hover:border-zinc-300'}`}>
      <button 
        className="w-full px-6 py-5 flex items-start justify-between text-left focus:outline-none bg-white"
        onClick={onClick}
      >
        <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-brand-navy' : 'text-zinc-700'}`}>{q}</span>
        <div className={`mt-1 p-1 rounded-full transition-colors ${isOpen ? 'bg-brand-cyan/10 text-brand-cyan' : 'bg-zinc-100 text-zinc-400'}`}>
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pt-2 border-t border-zinc-100">
            <p className="text-zinc-600 leading-relaxed mt-4" dangerouslySetInnerHTML={{ __html: a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategoryData = faqCategories.find(c => c.id === activeCategory);

  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy text-white py-24 px-4 text-center border-b border-zinc-800 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-6 shadow-xl">
                <HelpCircle className="w-8 h-8 text-brand-cyan" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">Knowledge Base</h1>
            <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to know about the FinWorld ecosystem, security protocols, and investment structure.
            </p>
         </div>
      </div>

      <Section>
        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-4">
                    <div className="bg-white rounded-3xl p-4 shadow-lg border border-zinc-100 sticky top-32">
                        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest px-4 py-3">Categories</h3>
                        <div className="space-y-2">
                            {faqCategories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setActiveCategory(cat.id);
                                        setOpenIndex(0); // Reset accordion on category change
                                        window.scrollTo({ top: 400, behavior: 'smooth' }); // Optional smooth scroll on mobile
                                    }}
                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 text-left font-bold ${
                                        activeCategory === cat.id 
                                        ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20' 
                                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-brand-navy'
                                    }`}
                                >
                                    <cat.icon className={`w-5 h-5 ${activeCategory === cat.id ? 'text-brand-cyan' : 'text-zinc-400'}`} />
                                    {cat.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-8">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-8 flex items-center gap-3">
                            <h2 className="text-3xl font-bold text-brand-navy font-display">{currentCategoryData?.title}</h2>
                            <div className="h-px flex-grow bg-zinc-200"></div>
                        </div>

                        <div className="space-y-4">
                            {currentCategoryData?.questions.map((item, index) => (
                                <AccordionItem 
                                    key={index} 
                                    q={item.q}
                                    a={item.a}
                                    isOpen={openIndex === index} 
                                    onClick={() => handleToggle(index)} 
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
      </Section>
      
      {/* Contact CTA */}
      <Section className="bg-zinc-50 border-t border-zinc-200">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl border border-zinc-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Still have questions?</h3>
              <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
                  Our support team is available to discuss your specific security needs and legacy planning goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="mailto:support@finworld.us" className="px-8 py-3 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-dark transition-colors shadow-lg">
                      Email Support
                  </a>
                  <Link to="/contact" className="px-8 py-3 bg-white border border-zinc-300 text-brand-navy rounded-full font-bold hover:border-brand-navy transition-colors">
                      Contact Sales
                  </Link>
              </div>
          </div>
      </Section>
    </div>
  );
};

export default Faq;