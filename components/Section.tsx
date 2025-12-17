import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;