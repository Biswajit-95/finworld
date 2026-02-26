import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Team from "./pages/Team";
import RetailClient from "./pages/RetailClient";
import Advisors from "./pages/Advisors";
import BrokerDealers from "./pages/BrokerDealers";
import HowToUse from "./pages/HowToUse";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/retail"
                element={
                    <RetailClient />
                }
              />
               <Route
                path="/services/advisors"
                element={
                  <ProtectedRoute allowedRole="advisor">
                    <Advisors />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/services/broker-dealers"
                element={
                  <ProtectedRoute allowedRole="broker dealer">
                    <BrokerDealers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product"
                element={
                    <Product />
                }
              />
              <Route
                path="/pricing"
                element={
                    <Pricing />
                }
              />
              <Route path="/how-to-use" element={
                 <ProtectedRoute>
                   <HowToUse />
               </ProtectedRoute>
                
                } />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
