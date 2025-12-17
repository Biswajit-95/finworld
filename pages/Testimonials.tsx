import React from 'react';
import Section from '../components/Section';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { name: 'Sarah Jenkins', role: 'Retail Client', quote: 'The Transfer of Access protocol gives me absolute peace of mind knowing my children won’t struggle with my estate.' },
  { name: 'Michael Ross', role: 'Financial Advisor', quote: 'FinWorld has significantly reduced my liability. The hardware isolation is a game changer for my high-net-worth clients.' },
  { name: 'David Chen', role: 'Executor', quote: 'Being an out-of-state executor was a nightmare until we used the FinWorld portal. Remote management made it simple.' },
  { name: 'Robert Alistair', role: 'Retiree', quote: 'I love the simplicity. I know that when I’m on this laptop, I’m safe. No wrong links, no phishing, just my finances.' },
  { name: 'Elena Rodriguez', role: 'Compliance Officer', quote: 'The Administrator Panel gives us the oversight we need to ensure all client interactions are secure and compliant.' },
  { name: 'James Thompson', role: 'Wealth Manager', quote: 'AES-256 encryption is non-negotiable for us. FinWorld delivers on the technical promise.' },
];

const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
            <h1 className="font-serif text-4xl font-bold text-slate-900 mb-4">Voices of Trust</h1>
            <p className="text-slate-600 text-lg">Real stories from the FinWorld community.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 hover:border-slate-400 group">
                    <Quote className="w-10 h-10 text-slate-200 mb-6 group-hover:text-slate-900 transition-colors" />
                    <p className="text-slate-800 italic mb-8 leading-relaxed font-medium">"{item.quote}"</p>
                    <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                        <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg group-hover:scale-110 transition-transform">
                            {item.name.charAt(0)}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                            <span className="text-xs text-slate-500 uppercase tracking-wide font-bold">{item.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;