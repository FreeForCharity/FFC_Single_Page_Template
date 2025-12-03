import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import FreeForCharity from "@/components/guidestar-guide/Free-for-charity";
import Faqs from "@/components/guidestar-guide/Faqs";
import CallSection from "@/components/help-for-charities-components/call-section";

const index = () => {
  return (
    <div>
      <HeroSection
        heading="Guidestar Guide"
        paragraph="Achieving validation through GuideStar enhances your charity’s credibility and visibility. It reassures donors and stakeholders of its legal compliance and ethical standing, potentially increasing funding opportunities. This guide will help you make the most of your GuideStar profile."
        heroImg="/Images/volunteer.png"
      />
      <FreeForCharity />
      <Faqs />
      <CallSection />
    </div>
  );
};

export default index;
