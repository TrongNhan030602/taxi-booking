import React from "react";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import ServiceSection from "./components/ServiceSection";
import LocationSection from "./components/LocationSection";
import ReviewSection from "./components/CustomerReview";
import BookingButton from "./components/BookingButton";
import Footer from "./components/Footer";
import "./App.css";
const phoneNumber = "0913519096";

const TaxiBooking = () => {
  return (
    <div className="container-fluid p-0">
      <Header />
      <SliderSection phoneNumber={phoneNumber} />
      <ServiceSection phoneNumber={phoneNumber} />
      <BookingButton phoneNumber={phoneNumber} />
      <LocationSection phoneNumber={phoneNumber} />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default TaxiBooking;
