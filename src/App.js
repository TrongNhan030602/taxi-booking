import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TaxiDirectoryPage from "./pages/TaxiDirectoryPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Thêm vào đây */}
      <div className="container-fluid p-0">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/taxi-directory"
            element={<TaxiDirectoryPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/services"
            element={<ServicesPage />}
          />
          <Route
            path="/pricing"
            element={<PricingPage />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
