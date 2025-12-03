import React from "react";
import Header from "@/components/ffc-volunteer-proving-ground-core-competencies/Header";
import ContentSection from "@/components/ffc-volunteer-proving-ground-core-competencies/ContentSection";
import Modulessection from "@/components/ffc-volunteer-proving-ground-core-competencies/Modules-section";
import Footer from "@/components/ffc-volunteer-proving-ground-core-competencies/Footer";

const index = () => {
  return (
    <div className="w-full pt-[150px]" id="segoe-font">
      <div className="w-full max-w-[90%] md:max-w-[80%] md:p-[2rem] mx-auto">
        <Header />
        <ContentSection />
        <Modulessection />
        <Footer />
      </div>
    </div>
  );
};

export default index;
