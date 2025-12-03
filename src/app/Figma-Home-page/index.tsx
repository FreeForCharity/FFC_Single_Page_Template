import React from "react";
import Hero from "@/components/Figma-Home-Page-Components/Hero";
import Mission from "@/components/Figma-Home-Page-Components/Mission";
import SupportFreeForCharity from "@/components/Figma-Home-Page-Components/SupportFreeForCharity";
import OurPrograms from "@/components/Figma-Home-Page-Components/Our-Programs";
import VolunteerwithUs from "@/components/Figma-Home-Page-Components/Volunteer-with-Us";
import FrequentlyAskedQuestions from "@/components/Figma-Home-Page-Components/FrequentlyAskedQuestions";

const index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <VolunteerwithUs />
      <SupportFreeForCharity />
      <OurPrograms />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default index;
