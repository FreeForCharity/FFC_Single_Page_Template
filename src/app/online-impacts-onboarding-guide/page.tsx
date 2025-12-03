import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import CharityText from "@/components/online-impacts-onboarding-guide-components/charity-text";
import ReadyToGetStartedNow from "@/components/online-impacts-onboarding-guide-components/Ready-To-Get-Started-Now";
import CallSection from "@/components/help-for-charities-components/call-section";

const index = () => {
  return (
    <div>
      <HeroSection
        heading="Online Impacts Onboarding Guide"
        paragraph="If you are representing a charity or you currently work for a charity that was hosted or designed by Online Impacts (onlineimpacts.org) start here to get help for your organization. You get instant access to many of our free tools and products right away!"
        heroImg="/Images/volunteer.png"
      />
      <CharityText />
      <ReadyToGetStartedNow />
      <CallSection />
    </div>
  );
};

export default index;
