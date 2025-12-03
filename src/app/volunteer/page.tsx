import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import FreeForCharity from "@/components/volunteer/Free-For-Charity";

const index = () => {
  return (
    <div>
      <HeroSection
        heading="Become A Volunteer"
        paragraph="We are always looking for individuals and business to support our training programs. Both donations as well as performing volunteer work for our training programs are critical to the success of Free For Charity and it’s mission."
        heroImg="/Images/volunteer-hero.png"
        imageContainerWidth="w-[100%]"
      />
      <FreeForCharity />
    </div>
  );
};

export default index;
