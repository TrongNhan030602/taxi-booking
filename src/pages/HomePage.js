import React from "react";
import SliderSection from "../components/home/SliderSection";
import ServiceSection from "../components/home/ServiceSection";
import AdvantagesSection from "../components/home/AdvantagesSection";
import LocationSection from "../components/home/LocationSection";
import PromotionSection from "../components/home/PromotionSection";
import CustomerFeedbackSection from "../components/home/CustomerFeedbackSection";
import PhoneCallButton from "../components/PhoneCallButton";
import ZaloButton from "../components/ZaloButton";

const phoneNumber = "0559596767";

const HomePage = () => {
  return (
    <>
      <SliderSection phoneNumber={phoneNumber} />
      <ServiceSection phoneNumber={phoneNumber} />
      <AdvantagesSection />
      <LocationSection phoneNumber={phoneNumber} />
      <PromotionSection phoneNumber={phoneNumber} />
      <CustomerFeedbackSection />
      <PhoneCallButton phoneNumber={phoneNumber} />
      <ZaloButton phoneNumber={phoneNumber} />
    </>
  );
};

export default HomePage;
