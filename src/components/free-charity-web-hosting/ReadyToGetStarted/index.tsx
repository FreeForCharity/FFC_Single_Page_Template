import React from "react";
import Transparentbtn from "@/components/UI/Transparentbtn";

const index = () => {
  return (
    <div className="py-[20px]">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] pb-[10px]"
          id="aria-font"
        >
          Ready to Get Started Now?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-o sm:gap-6">
          <Transparentbtn text="501(c)3 Charities Click Here To Get Started!" href="https://freeforcharity.org/hub/store/ffc-consulting/free-for-charity-501c3-onboarding-ffc-nonprofit-charity-onboarding" />
          <Transparentbtn text="Pre-501(c)3 Charities Click Here to Get Started!" href="https://freeforcharity.org/hub/cart.php?a=confproduct&i=8" />
        </div>
      </div>
    </div>
  );
};

export default index;
