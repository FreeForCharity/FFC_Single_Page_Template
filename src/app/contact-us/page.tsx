import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import ContactSection from "@/components/Contact-Us-components/Contact-Us";

const index = () => {
  return (
    <div>
      <div>
        <HeroSection
          heading="Get In Touch with Free for Charity"
          paragraph="Connecting Students, Professionals, & Businesses with Charities in Need"
          heroImg="/Images/about-us.webp"
          fontSize={36}
          lineHeight={50}
          imageContainerWidth="w-[100%]"
        />

        <ContactSection />
      </div>
    </div>
  );
};

export default index;
