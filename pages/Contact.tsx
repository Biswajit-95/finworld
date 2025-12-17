import React, { useState } from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, Send, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Retail Client',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-zinc-50 min-h-screen">
      
      {/* --- HERO HEADER --- */}
      <div className="relative pt-32 pb-48 lg:pb-64 bg-brand-navy overflow-hidden rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl">
        {/* Background Textures */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-dark rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm shadow-lg">
                    <MessageSquare className="w-3 h-3" /> Contact Us
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    Let's Secure Your Legacy.
                </h1>
                <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
                    Whether you are a retail client looking for protection or a broker safeguarding your clients, our team is ready to assist.
                </p>
            </motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-32 lg:-mt-48 mb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-brand-cyan/30 transition-all duration-300 group cursor-default">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Email Support</h4>
                                <a href="mailto:support@finworld.us" className="text-xl font-bold text-brand-navy hover:text-brand-cyan transition-colors">support@finworld.us</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-brand-cyan/30 transition-all duration-300 group cursor-default">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Phone Line</h4>
                                <a href="tel:5154443518" className="text-xl font-bold text-brand-navy hover:text-brand-cyan transition-colors">515.444.3518</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-brand-cyan/30 transition-all duration-300 group cursor-default">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner flex-shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Headquarters</h4>
                                <p className="text-lg font-bold text-brand-navy leading-snug">
                                    405 Railroad Pl,<br />
                                    West Des Moines, Iowa 50265
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-brand-cyan/30 transition-all duration-300 group cursor-default">
                        <div className="flex items-start gap-6">
                            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-brand-navy border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-inner flex-shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Business Hours</h4>
                                <div className="text-base font-bold text-brand-navy leading-snug">
                                    <div className="flex justify-between gap-4">
                                        <span>Mon - Fri:</span>
                                        <span>9am - 5pm Open</span>
                                    </div>
                                    <div className="flex justify-between gap-4 text-zinc-400">
                                        <span>Sat - Sun:</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* FAQ Prompt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="pt-8 hidden lg:block"
                >
                    <div className="bg-brand-cyan/5 border border-brand-cyan/10 rounded-3xl p-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Have general questions?</h3>
                            <p className="text-zinc-600 mb-6 text-sm">Our knowledge base covers security protocols, pricing, and hardware specs.</p>
                            <Link to="/faq" className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:text-brand-navy transition-colors text-sm uppercase tracking-wide">
                                Visit Knowledge Base <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    </div>
                </motion.div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-300/50 border border-zinc-100 relative overflow-hidden"
                >
                    {/* Form Decor */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy"></div>
                    
                    {isSubmitted ? (
                        <div className="min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-brand-navy mb-4">Message Sent!</h3>
                            <p className="text-zinc-600 text-lg max-w-md mx-auto leading-relaxed">
                                Thank you for your inquiry! We will get back to you within 48 hours.
                            </p>
                            <button 
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({ firstName: '', lastName: '', email: '', role: 'Retail Client', message: '' });
                                }}
                                className="mt-8 text-brand-cyan font-bold hover:text-brand-navy transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl font-display font-bold text-brand-navy mb-8">Send us a message</h2>
                            
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 ml-1">First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all font-medium text-brand-navy placeholder:text-zinc-400" 
                                            placeholder="Jane" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-zinc-700 ml-1">Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all font-medium text-brand-navy placeholder:text-zinc-400" 
                                            placeholder="Doe" 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                     <label className="text-sm font-bold text-zinc-700 ml-1">Email Address</label>
                                     <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all font-medium text-brand-navy placeholder:text-zinc-400" 
                                        placeholder="jane@example.com" 
                                     />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-700 ml-1">I am a...</label>
                                    <div className="relative">
                                        <select 
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all font-medium text-brand-navy appearance-none cursor-pointer"
                                        >
                                            <option>Retail Client</option>
                                            <option>Broker / Dealer</option>
                                            <option>Financial Advisor</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                     <label className="text-sm font-bold text-zinc-700 ml-1">Message</label>
                                     <textarea 
                                        rows={5} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 outline-none transition-all font-medium text-brand-navy placeholder:text-zinc-400 resize-none" 
                                        placeholder="How can we help you secure your legacy?"
                                     ></textarea>
                                </div>

                                <button type="submit" className="w-full py-5 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-dark transition-all transform active:scale-[0.98] shadow-lg shadow-brand-navy/20 flex items-center justify-center gap-2 group">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </div>

        {/* FAQ Mobile Link (Visible only on smaller screens) */}
        <div className="mt-12 lg:hidden">
             <div className="bg-white border border-zinc-200 rounded-3xl p-8 text-center shadow-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-3">Have general questions?</h3>
                <p className="text-zinc-600 mb-6 text-sm">Check out our Knowledge Base for quick answers.</p>
                <Link to="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-brand-navy rounded-full font-bold hover:bg-zinc-200 transition-colors">
                    Visit FAQ <ArrowRight className="w-4 h-4" />
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;