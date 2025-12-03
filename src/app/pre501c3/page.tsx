import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ReadyToGetStarted from "@/components/help-for-charities-components/Ready-to-Get-Started-Now";
import CharityNonprofitDirectorFaq from "@/components/help-for-charities-components/Charity-Nonprofit-Director-Faq";
import CallSection from "@/components/help-for-charities-components/call-section";
import Faqs from "@/components/pre501c3-components/Faqs";
import Charity from "@/components/pre501c3-components/charity";

const index = () => {
  return (
    <div className="w-full">
      <HeroSection
        heading="Pre-501(c)3 Onboarding Guide"
        paragraph="If you are representing a charity or you currently work for a charity and want to improve your own skills start here to get help for your organization. You get instant access to many of our free tools and products right away!"
        heroImg="/Images/volunteer.png"
      />
      <Charity />
      <Faqs />
      <ReadyToGetStarted />
      <CharityNonprofitDirectorFaq />
      <ReadyToGetStarted />
      <CallSection />
    </div>
  );
};

export default index;
