import React from "react";
import Hero from "@/components/Domains/Hero";
import DearProspective from "@/components/Domains/Dear-Prospective";
import OrderYourDomain from "@/components/Domains/Order-Your-Domain";
import CardsSection from "@/components/Domains/Cards-Section";
import VerifyYourDomain from "@/components/Domains/Verify-Your-Domain";
import Seperater from "@/components/Domains/Seperater";
import SetupEmailHosting from "@/components/Domains/Setup-Email-Hosting";
import CurvedBlueSection from "@/components/Domains/Curved-Blue-Section";
import CurvedBlackSection from "@/components/Domains/Curved-Black-Section";
import GetNewWebsite from "@/components/Domains/Get-New-Website";

const index = () => {
  return (
    <div>
      <div className="pt-[80px]">
        <Hero />
        <DearProspective />
        <OrderYourDomain />
        <CardsSection />
        <VerifyYourDomain />
        <Seperater />
        <SetupEmailHosting />
        <CurvedBlueSection />
        <CurvedBlackSection />
        <GetNewWebsite />
      </div>
    </div>
  );
};

export default index;
