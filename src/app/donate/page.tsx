import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import Measurableimpact from "@/components/Donate-components/measurable-impact";
import FreeForCharityDonationOptions from "@/components/Donate-components/Free-for-Charity-Donation-Options";
import GeneralDonation from "@/components/Donate-components/General-donation";

const index = () => {
  return (
    <div>
      <div>
        <HeroSection
          heading="Be a Part in Donations"
          paragraph="We are always looking for individuals and business to support our training programs. Both donations as well as performing volunteer work for our training programs are critical to the success of Free For Charity and it’s mission."
          heroImg="/Images/donation.webp"
          imageContainerWidth="w-[100%]"
        />

        <Measurableimpact />
        <FreeForCharityDonationOptions />
        <GeneralDonation />
      </div>
    </div>
  );
};

export default index;
