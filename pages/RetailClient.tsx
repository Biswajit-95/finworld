import React from "react";
import Section from "../components/Section";
import SpotlightCard from "../components/SpotlightCard";
import {
  ShieldCheck,
  Lock,
  Globe,
  Server,
  UserCheck,
  AlertTriangle,
  Wifi,
  Cloud,
  Share2,
  Briefcase,
  User,
  Monitor,
  Key,
  ArrowRight,
  HeartHandshake,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RetailClient: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 bg-zinc-50">
      {/* --- 1. HERO --- */}
      <div className="bg-brand-navy pb-32 pt-16 relative overflow-hidden rounded-b-[3rem] mx-2 md:mx-4 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        {/* Abstract shapes */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-dark rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-brand-cyan text-xs font-bold uppercase mb-6 backdrop-blur-sm">
                FinWorld Services
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Retail Client <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white opacity-90">
                  Secure Vault
                </span>
              </h1>
              <p className="text-xl text-zinc-200 font-light leading-relaxed mb-8 border-l-4 border-brand-cyan pl-6">
                FinWorld offers financial industry leaders a tool to support
                their customers in a secure, easy way.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
                FinWorld provides a secure device accessible solely through our
                intranet portal to view and manage important personal wealth,
                assets and essential documents.
              </p>
            </motion.div>

            {/* Visual: Secured Device/Vault Concept */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-brand-cyan/20 rounded-3xl transform rotate-3 scale-105 blur-2xl opacity-50 transition-opacity duration-1000 group-hover:opacity-80"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
                  alt="FinWorld Secure Device"
                  className="w-full object-cover h-[300px] md:h-[500px] opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                {/* UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-brand-cyan rounded-xl text-white shadow-lg shadow-brand-cyan/30">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">
                        Vault Locked
                      </div>
                      <div className="text-zinc-400 text-xs uppercase tracking-wider">
                        AES-256 Encrypted
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- 2. DIGITAL VAULT VALUE PROP --- */}
      <Section className="bg-white -mt-20 pt-32 relative z-0">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white border border-zinc-100 shadow-xl shadow-zinc-200/50 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy via-brand-cyan to-brand-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            <h2 className="text-2xl md:text-4xl text-brand-navy font-serif font-medium leading-relaxed">
              "This is a{" "}
              <span className="text-brand-cyan font-bold">digital vault</span>{" "}
              combined with a secured device to safeguard private information.
              It is an easy way to transfer all your important data to your
              heirs when they will need it most."
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 text-zinc-400 text-sm font-bold uppercase tracking-widest">
                <Share2 className="w-4 h-4" /> Simple Transfer of Access Form
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- 3. WHY THE NEED? (Refined Pain Points) --- */}
      <Section className="bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-navy/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why the Need for FinWorld?
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              Over 30 years of financial planning seeing the same problem
              happening over and over.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Spouses struggling to take over and manage the family's affairs after the death of a partner.",
                icon: HeartHandshake,
              },
              {
                text: "Children struggling to find everything needed to manage and settle an estate.",
                icon: User,
              },
              {
                text: "Out of state executors with limited time to find everything needed to manage and settle the estate.",
                icon: Globe,
              },
              {
                text: "Secure way to store sensitive documents and conduct financial business electronically.",
                icon: FileCheck,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-cyan group-hover:text-white group-hover:border-brand-cyan transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-zinc-200 text-lg leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- 4. MULTI-FACTOR & ENCRYPTION --- */}
      <Section className="bg-zinc-50 border-b border-zinc-200">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-brand-cyan" /> Multi-factor Login
            </h2>
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 shadow-sm mb-8 hover:shadow-md transition-shadow">
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                We restrict access to sensitive information using a series of
                integrated role-based files and page permissions on a regular
                basis. Information can only be accessed by IP address, device,
                username and password.
              </p>
              <div className="p-5 bg-red-50 rounded-2xl border border-red-100 flex items-start gap-4">
                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900 text-sm uppercase tracking-wide mb-1">
                    Remote Wipe Protocol
                  </h4>
                  <p className="text-red-800 text-sm font-medium leading-relaxed">
                    In the event a device is stolen or misplaced, that device
                    can be remotely wiped and replaced.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-6">
              FinWorld also leverages:
            </h2>
            <ul className="space-y-4">
              <li className="bg-white p-6 rounded-2xl border border-zinc-200 flex items-center gap-5 hover:border-brand-cyan hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-bold text-zinc-700 text-lg">
                  Encryption (AES or TLS 1.2(3) and SSL technology).
                </span>
              </li>
              <li className="bg-white p-6 rounded-2xl border border-zinc-200 flex items-center gap-5 hover:border-brand-cyan hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Wifi className="w-6 h-6" />
                </div>
                <span className="font-bold text-zinc-700 text-lg">
                  VPN services incorporate End-to-End Encryption.
                </span>
              </li>
              <li className="bg-white p-6 rounded-2xl border border-zinc-200 flex items-center gap-5 hover:border-brand-cyan hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="font-bold text-zinc-700 text-lg">
                  Cloud Encryption is on the horizon.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* --- 5. HOW SAFE IS IT? --- */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
            How Safe Is It?
          </h2>
          <div className="w-24 h-1.5 bg-brand-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Compliance Standards",
              desc: "Best industry practices are followed, utilizing layered security protocols and top-of-class lines of defense.",
            },
            {
              title: "Firewall Defense",
              desc: "Firewalls provide a protective barrier between the intranet and the internet.",
            },
            {
              title: "EndPoint Security",
              desc: "Network security architecture that offers advanced threat protection. Discover, investigate, and respond to attacks on endpoints and servers.",
            },
            {
              title: "Data Encryption Standard",
              desc: "The Data Encryption Standard (DES-AES256) uses a same-key concept to encrypt and decrypt a message– so both the sender and receiver must have access to the same private key.",
            },
            {
              title: "Security Breaches",
              desc: "In the event of spam, phishing, spyware and malware, FinWorld utilizes various monitoring tools, and on-demand/on-event packet capture appliances exist to track details of the network.",
            },
            {
              title: "Viruses – EDR",
              desc: "FinWorld incorporates endpoint detection and response security tools to secure our infrastructure and deliver real-time visibility, analysis, protection and remediation for endpoints.",
            },
          ].map((item, i) => (
            <SpotlightCard
              key={i}
              className="bg-zinc-50 p-6 md:p-8 rounded-3xl border border-zinc-200 hover:border-brand-cyan hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300 h-full flex flex-col"
              spotlightColor="rgba(0, 144, 212, 0.08)"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-cyan" /> {item.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      {/* --- 6. INTRANET TYPES --- */}
      <Section className="bg-zinc-50 border-y border-zinc-200">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-brand-navy">
            Different Types of FinWorld Intranets
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-zinc-100 hover:border-brand-navy transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center text-brand-navy mb-6">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              INTRANET
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              A private, online, internal communications network accessible only
              to FinWorld broker dealers, brokers and their clients.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-zinc-100 hover:border-brand-cyan transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center text-brand-cyan mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              EXTRANET
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              A closed private network only accessible to select external
              parties that FinWorld validates are safe and linked for direct
              communication.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-zinc-100 hover:border-zinc-900 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 mb-6">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">PORTAL</h3>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              A gateway with a public-facing web page that allows the
              intranet/extranet to connect with broker dealers, brokers and
              their clients.
            </p>
            <div className="p-3 bg-zinc-50 rounded-lg text-xs font-bold text-zinc-500 border-l-2 border-brand-navy">
              Restricted Hardware Access Only
            </div>
          </div>
        </div>
      </Section>

      {/* --- 7. TARGETS (Enhanced) --- */}
      <Section className="bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0  opacity-10"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">
              Why Is This Important?
            </h2>
            <div className="mb-10 rounded-2xl ">
              <p className="text-white mb-8 font-light text-xl leading-relaxed">
                Cyber-enabled attacks targeting adults aged 60+ are up over{" "}
                <span className="text-red-500 font-bold">40%</span> as of 2026.
              </p>

              <p className="text-zinc-400 italic border-l-2 border-red-500 pl-4 text-sm space-y-2">
                <span className="block">
                  Reported cyber-enabled losses for Americans age 60+ increased
                  about five-fold from 2020 to 2024 (from ~$966M to ~$4.8B).
                </span>
                <span className="block">
                  The number of IC3 complaints from adults age 60+ increased
                  about 40% over the same period.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-zinc-500 uppercase tracking-widest text-xs mb-4">
                  Old Targets
                </h4>
                <ul className="space-y-3 text-zinc-400 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>{" "}
                    Hospitals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>{" "}
                    Oil companies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>{" "}
                    Big companies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>{" "}
                    Ransomware for crypto
                  </li>
                </ul>
              </div>
              <div className="bg-red-950/20 p-6 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <h4 className="font-bold text-red-500 uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" /> New Targets
                </h4>
                <ul className="space-y-3 text-white font-bold text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                    Mom and Dad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                    Grandma and Grandpa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                    Great Grandma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>{" "}
                    Non-tech savvy users
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Images Comparison */}
          <div className="flex flex-col gap-8">
            <div className="relative h-48 rounded-2xl overflow-hidden border border-zinc-700 opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute top-4 right-4 bg-black/80 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold z-10">
                Old Target
              </div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover grayscale"
                alt="Corporate"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-red-500 shadow-2xl shadow-red-900/20 hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold z-10 shadow-lg animate-pulse">
                New Target
              </div>
              <img
                src="/new-targets.png"
                className="w-full h-full object-cover"
                alt="Elderly Couple"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-bold text-center">
                  Protected by FinWorld
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- 8. WHAT DOES IT LOOK LIKE (Enhanced) --- */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            {/* Laptop Visualization */}
            <div className="relative rounded-[2rem] bg-zinc-900 p-4 shadow-2xl border border-zinc-200">
              {/* Fake Screen Bezel */}
              <div className="rounded-2xl overflow-hidden border border-zinc-700 relative bg-zinc-800 aspect-[16/10]">
                <img
                  src="/retailclient-secureportalactive.png"
                  alt="FinWorld Laptop Interface"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Interface Overlay simulation */}
                <div className="absolute inset-0 bg-brand-navy/20 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center">
                  <Lock className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-bold text-sm">
                    Secure Portal Active
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="w-1/3 h-1 bg-zinc-700 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-6">
              What Does FinWorld Look Like?
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-light">
              The FinWorld intranet look and feel is simple – and that’s the
              intent. Our goal is to have a simple user interface to provide an
              easy and secure environment to access and conduct financial
              business.
            </p>

            <div className="mb-8">
              <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-brand-cyan" /> No
                one-size-fits-all intranet solution:
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-zinc-200 pl-4">
                Each broker dealer has the ability to select services and choose
                what works for them via an administrator panel.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:border-brand-navy hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-zinc-100 rounded-lg group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-brand-navy text-lg group-hover:text-brand-cyan transition-colors">
                    Brokers
                  </h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Brokers use FinWorld to help clients organize information,
                  access accounts and collaborate with clients in a secure
                  environment.
                </p>
              </div>

              <div className="p-6 bg-brand-navy border border-brand-navy rounded-2xl shadow-lg text-white group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-brand-dark rounded-lg group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-lg group-hover:text-brand-cyan transition-colors">
                    Broker Dealers
                  </h4>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Broker dealers use FinWorld to engage brokers with targeted,
                  patented, secure, customized and unique devices that are
                  exclusive to the broker dealer relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --- 9. TRANSFER OF ACCESS (Enhanced Flow) --- */}
      <Section className="bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-2 block">
              Legacy Protection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
              Transfer of Access
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-light">
              Allows a transfer of information right when needed to the people
              who need it most.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Left: The Process Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-8 flex items-center gap-3">
                <Key className="w-6 h-6 text-brand-cyan" /> How it Works
              </h3>
              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-zinc-200"></div>

                {/* Step 1 */}
                <div className="relative flex gap-6 items-start">
                  <div
                    className="w-12 aspect-square flex-shrink-0 
                  rounded-full border-4 border-zinc-100 
                  bg-brand-cyan text-white font-bold 
                  flex items-center justify-center 
                  relative z-10 shadow-md leading-none"
                  >
                    1
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-navy">
                      Secure Organization
                    </h4>
                    <p className="text-zinc-600 text-sm">
                      You organize your assets and documents within the FinWorld
                      Vault today.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex gap-6 items-start">
                  <div
                    className="w-12 aspect-square flex-shrink-0 
                  rounded-full border-4 border-zinc-100 
                  bg-brand-navy text-white font-bold 
                  flex items-center justify-center 
                  relative z-10 shadow-md leading-none"
                  >
                    2
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-navy">
                      Time of Need
                    </h4>
                    <p className="text-zinc-600 text-sm">
                      When incapacitation or death occurs, the protocol is
                      triggered.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex gap-6 items-start">
                  <div
                    className="w-12 aspect-square flex-shrink-0 
                  rounded-full border-4 border-zinc-100 
                  bg-brand-cyan text-white font-bold 
                  flex items-center justify-center 
                  relative z-10 shadow-md leading-none"
                  >
                    3
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-navy">
                      Secure Handoff
                    </h4>
                    <p className="text-zinc-600 text-sm">
                      Passwords and login info are shared securely. Multiple
                      keys can be issued for shared access.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex gap-6 items-start">
                  <div
                    className="w-12 aspect-square flex-shrink-0 
                  rounded-full border-4 border-zinc-100 
                  bg-brand-navy text-white font-bold 
                  flex items-center justify-center 
                  relative z-10 shadow-md leading-none"
                  >
                    4
                  </div>

                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-brand-navy">
                      Continuity
                    </h4>
                    <p className="text-zinc-600 text-sm">
                      Documents accessed anywhere in the world. Trustees pick up
                      exactly where you left off.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Beneficiaries Grid */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-zinc-100">
              <h3 className="text-xl font-bold text-brand-navy mb-8 text-center">
                Authorized Beneficiaries
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { role: "Spouse / Partner", icon: HeartHandshake },
                  { role: "Trustee", icon: FileCheck },
                  { role: "Executor", icon: Briefcase },
                  { role: "Children", icon: UserCheck },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-zinc-400 mb-3 group-hover:text-brand-cyan transition-colors" />
                    <span className="font-bold text-brand-navy text-sm text-center">
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emotional Quote / CTA */}
          <div className="bg-brand-navy rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[80px]"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                "The gift of organization is the ultimate final gift one can
                receive."
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-brand-navy font-bold rounded-full hover:bg-brand-cyan hover:text-white transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RetailClient;
