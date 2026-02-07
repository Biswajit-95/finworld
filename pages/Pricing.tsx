import React from "react";
import Section from "../components/Section";
import SpotlightCard from "../components/SpotlightCard";
import { BadgeCheck, Check, RefreshCw, Users, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  /* Container animation
   Controls stagger and overall fade-in */
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  /* Item animation
   Each child fades and slides upward */
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
      },
    },
  };

  return (
    <div className="pt-24 md:pt-32 bg-zinc-100 min-h-screen relative overflow-hidden">
      {/* Background Decor - Enhanced for depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      {/* Top subtle gradient to frame the content */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-brand-navy/5 to-transparent pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-navy/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      <Section className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-navy mb-4 tracking-tight">
            Price for Retail Customers
          </h1>
          <p className="text-zinc-500 text-lg font-light">
            Transparent, secure, and simple.
          </p>
        </motion.div>

        {/* Broker Dealer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-brand-navy text-white p-8 md:p-10 rounded-[2rem] shadow-2xl shadow-brand-navy/20 mb-16 relative overflow-hidden group"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-navy z-0"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-md shadow-lg">
              <BadgeCheck className="w-4 h-4" /> Exclusive Benefit
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              100% of Computers Paid for by the{" "}
              <br className="hidden md:block" />{" "}
              <span className="text-brand-cyan">Broker Dealer</span>
            </h2>
            <div className="bg-white/5 px-6 py-2 rounded-xl border border-white/5 backdrop-blur-sm">
              <p className="text-zinc-300 text-lg font-light">
                (Eligibility requires over one million in fee-based assets)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Primary Costs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="h-full">
            <SpotlightCard
              className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 shadow-xl shadow-zinc-300/40 text-center flex flex-col justify-center h-full hover:border-brand-navy/30 transition-all duration-300"
              spotlightColor="rgba(0, 47, 85, 0.05)"
            >
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Cost Per Computer
              </h3>
              <div className="text-5xl md:text-6xl font-display font-bold text-brand-navy mb-2 tracking-tighter">
                $1,999<span className="text-3xl text-zinc-400">.99*</span>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="w-full py-4 bg-brand-navy text-white rounded-xl font-bold block hover:bg-brand-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200 group"
                >
                  Order Device{" "}
                  <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <SpotlightCard
              className="bg-white p-10 rounded-[2.5rem] border border-zinc-200 shadow-xl shadow-zinc-300/40 text-center flex flex-col justify-center h-full hover:border-brand-cyan/30 transition-all duration-300"
              spotlightColor="rgba(0, 144, 212, 0.05)"
            >
              <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
                Annual Cost Per Computer
              </h3>
              <div className="text-5xl md:text-6xl font-display font-bold text-brand-navy mb-4 tracking-tighter">
                $200<span className="text-3xl text-zinc-400">*</span>
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="w-full py-4 bg-white border-2 border-brand-navy text-brand-navy rounded-xl font-bold block hover:bg-brand-navy hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200"
                >
                  Start Subscription
                </Link>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-lg border border-zinc-100 text-xs font-medium text-zinc-500 mx-auto">
                <Check className="w-3 h-3 text-brand-cyan" /> Includes updates,
                storage, encryption, VPN
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Secondary Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Replacement */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 h-full shadow-lg shadow-zinc-200/50 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <RefreshCw className="w-6 h-6 text-brand-navy group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Replacement Computers
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2.5 shadow-[0_0_10px_rgba(0,144,212,0.5)]"></div>
                  <span className="text-zinc-600 font-medium">
                    Market price of the computer at the time*
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2.5 shadow-[0_0_10px_rgba(0,144,212,0.5)]"></div>
                  <span className="text-zinc-600 font-medium">
                    <strong className="text-brand-navy">$100</strong> to program
                    computer
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2.5 shadow-[0_0_10px_rgba(0,144,212,0.5)]"></div>
                  <span className="text-zinc-600 font-medium">
                    Market price to ship (overnight or ground)*
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Additional */}
          <motion.div variants={itemVariants} className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 h-full shadow-lg shadow-zinc-200/50 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center shadow-sm border border-zinc-100 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <Users className="w-6 h-6 text-brand-navy group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  Additional Computers
                </h3>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-navy mt-2.5"></div>
                  <span className="text-zinc-600 font-medium">
                    Market cost of computer*
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-navy mt-2.5"></div>
                  <span className="text-zinc-600 font-medium">
                    <strong className="text-brand-navy">$100</strong> to program
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-navy mt-2.5"></div>
                  <span className="text-zinc-600 font-medium">
                    Market shipping price*
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-navy mt-2.5"></div>
                  <span className="text-zinc-600 font-medium">
                    <strong className="text-brand-navy">$200</strong> per year
                    for all EDR ongoing updates and support*
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] md:text-xs text-zinc-400 max-w-3xl mx-auto leading-relaxed border-t border-zinc-200 pt-8"
        >
          *All prices are subject to applicable taxes, fees, and market
          fluctuations. Shipping costs vary depending on selected options.
          Pricing and eligibility requirements may change without notice. Broker
          Dealer coverage is limited to those who meet the stated asset
          requirements.
        </motion.div>
      </Section>
    </div>
  );
};

export default Pricing;
