import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    // Services is handled manually for dropdown
    { name: "Product", path: "/product" },
    { name: "Pricing", path: "/pricing" },

    { name: "How to Use", path: "/how-to-use" },
    { name: "Faq", path: "/Faq" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesSubItems = [
    { name: "Retail Client", path: "/services/retail" },
    { name: "Advisors", path: "/services/advisors" },
    { name: "Broker Dealers", path: "/services/broker-dealers" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  // outside click to close user dropdown
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Handle outside click for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40 transition-all duration-300">
          <div className="px-6 flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center py-2">
              <NavLink
                to="/"
                className="group scale-100 origin-left md:scale-110 transition-transform block"
              >
                <Logo />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 3).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-brand-navy/10 text-brand-navy"
                        : "text-zinc-600 hover:text-brand-navy hover:bg-white/50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    location.pathname.includes("/services")
                      ? "bg-brand-navy/10 text-brand-navy"
                      : "text-zinc-600 hover:text-brand-navy hover:bg-white/50"
                  }`}
                >
                  Services{" "}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                  >
                    {servicesSubItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-zinc-600 hover:bg-brand-navy/5 hover:text-brand-navy font-medium transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(3).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-brand-navy/10 text-brand-navy"
                        : "text-zinc-600 hover:text-brand-navy hover:bg-white/50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              {user ? (
                <div className="relative" ref={userRef}>
                  <button
                    type="button"
                    onClick={() => setUserMenuOpen((s) => !s)}
                    aria-expanded={userMenuOpen}
                    aria-haspopup="menu"
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-full text-sm font-bold hover:bg-zinc-50 transition-shadow shadow-sm"
                  >
                    <User className="w-5 h-5 text-zinc-700" />
                    <span className="hidden sm:inline-block text-sm text-zinc-700">
                      {user.email.split("@")[0]}
                    </span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {userMenuOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 overflow-hidden z-50"
                    >
                      <div className="px-4 py-2 text-sm text-zinc-700 font-medium border-b border-zinc-100 break-words">
                        {user.email}
                      </div>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50"
                      >
                        <div className="flex items-center gap-2">
                          <LogOut className="w-4 h-4" /> Logout
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-dark transition-all hover:shadow-lg transform hover:-translate-y-0.5 shadow-md shadow-brand-navy/20"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-brand-navy p-2 hover:bg-brand-navy/10 rounded-lg transition-colors focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-32 px-6 animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col space-y-2 pb-8">
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-brand-navy"
                      : "text-zinc-500 hover:text-brand-navy hover:bg-zinc-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div className="px-4 py-3">
              <span className="text-lg font-bold text-zinc-500">Services</span>
              <div className="mt-2 pl-4 flex flex-col space-y-2 border-l-2 border-zinc-200">
                {servicesSubItems.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.path}
                    className="block text-lg font-medium text-zinc-500 hover:text-brand-navy"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>

            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-lg font-bold transition-colors ${
                    isActive
                      ? "bg-zinc-100 text-brand-navy"
                      : "text-zinc-500 hover:text-brand-navy hover:bg-zinc-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            {user ? (
              <div className="space-y-4">
                <div className="px-4 py-3 bg-zinc-50 rounded-xl text-zinc-700 font-medium break-words">
                  {user.email}
                </div>
                <button
                  onClick={() => logout()}
                  className="w-full bg-rose-500 text-white px-5 py-4 rounded-xl text-lg font-bold text-center shadow-xl"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full mt-8 bg-brand-navy text-white px-5 py-4 rounded-xl text-lg font-bold text-center shadow-xl"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
