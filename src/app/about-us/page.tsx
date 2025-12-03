import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import Content from "@/components/about-us-components/content";
import CardSection from "@/components/about-us-components/Card-section";
import ParaText from "@/components/about-us-components/ParaText";
import CallToAction from "@/components/about-us-components/CallToAction";

const index = () => {
  return (
    <div className="w-full">
      <HeroSection
        heading="About Free For Charity"
        paragraph="Free for Charity has a simple mission with broad implications."
        heroImg="/Images/donation.webp"
        fontSize={35}
        lineHeight={50}
      />

      <Content />
      <CardSection />
      <ParaText />
      <CallToAction />

      {/* <div className="w-full max-w-[90%] mx-auto p-10 bg-red-500">
        <h1>About Us Page</h1>
      </div> */}
    </div>
  );
};

export default index;
