import React from "react";
import Hero from "@/components/Figma-Home-Page-Components/Hero";
import Mission from "@/components/Figma-Home-Page-Components/Mission";
import SupportFreeForCharity from "@/components/Figma-Home-Page-Components/SupportFreeForCharity";
import EndowmentFeatures from "@/components/Figma-Home-Page-Components/Endowment-Features";
import OurPrograms from "@/components/Figma-Home-Page-Components/Our-Programs";
import VolunteerwithUs from "@/components/Figma-Home-Page-Components/Volunteer-with-Us";
import Results2023 from "@/components/Figma-Home-Page-Components/Results-2023";
import Testimonials from "@/components/Home/Testimonials";
import TheFreeForCharityTeam from "@/components/Figma-Home-Page-Components/TheFreeForCharityTeam";
import FrequentlyAskedQuestions from "@/components/Figma-Home-Page-Components/FrequentlyAskedQuestions";

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Results2023 />
      <Testimonials />
      <VolunteerwithUs />
      <SupportFreeForCharity />
      <EndowmentFeatures />
      <OurPrograms />
      <FrequentlyAskedQuestions />
      <TheFreeForCharityTeam />
    </div>
  );
};

export default index;
