import React from "react";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import ServiceSection from "./components/ServiceSection";
import AdvantagesSection from "./components/AdvantagesSection";
import LocationSection from "./components/LocationSection";
import PromotionSection from "./components/PromotionSection";
import CustomerFeedbackSection from "./components/CustomerFeedbackSection";
import Footer from "./components/Footer";
import PhoneCallButton from "./components/PhoneCallButton";
import "./App.css";
const phoneNumber = "0559596767";

const TaxiBooking = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <SliderSection phoneNumber={phoneNumber} />
      <ServiceSection phoneNumber={phoneNumber} />
      <AdvantagesSection phoneNumber={phoneNumber} />
      <LocationSection phoneNumber={phoneNumber} />
      <PromotionSection phoneNumber={phoneNumber} />
      <CustomerFeedbackSection />
      <Footer />
      <PhoneCallButton phoneNumber={phoneNumber} />
    </div>
  );
};

export default TaxiBooking;
