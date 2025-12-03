import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import CardSection from "@/components/free-for-charitys-tools-for-success-components/Card-section";
import RescueTime from "@/components/free-for-charitys-tools-for-success-components/Rescue-Time";
import TwoCards from "@/components/free-for-charitys-tools-for-success-components/Two-Cards";
import EducationalSites from "@/components/free-for-charitys-tools-for-success-components/Educational-Sites";
import TwoCardsWithHeading from "@/components/free-for-charitys-tools-for-success-components/Two-Cards-With-Heading";
import TwoFlexCards from "@/components/free-for-charitys-tools-for-success-components/Two-Flex-Cards";
import SixGridCards from "@/components/free-for-charitys-tools-for-success-components/Six-Grid-Cards";
import ToolsForBusinesses from "@/components/free-for-charitys-tools-for-success-components/Tools-For-Businesses";
import FiveCardsGridSection from "@/components/free-for-charitys-tools-for-success-components/Five-Cards-Grid-Section";

const index = () => {
  return (
    <div>
      <HeroSection
        heading="Free For Charity’s Tools for Success"
        paragraph="This page contains multiple useful tool that can be used to aid non-profits and businesses with their organizations needs"
        heroImg="/Images/glass-paper-pen.webp"
        fontSize={28}
        lineHeight={40}
        imageContainerWidth="w-[55%]"
      />
      <CardSection />
      <RescueTime />
      <TwoCards />
      <EducationalSites />
      <TwoCardsWithHeading />
      <TwoFlexCards />
      <SixGridCards />
      <ToolsForBusinesses />
      <FiveCardsGridSection />
    </div>
  );
};

export default index;
