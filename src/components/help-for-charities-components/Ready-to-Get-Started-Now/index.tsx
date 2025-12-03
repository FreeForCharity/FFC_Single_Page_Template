import React from "react";
import Transparentbtn from "@/components/UI/Transparentbtn";

const index: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center mb-10 pt-10">
      <div className="w-[90%] md:w-[80%] mx-auto text-center">
        <h1
          className="text-[22px] sm:text-[24px] md:text-[26px] font-medium text-[#333] mb-6"
          id="aria-font"
        >
          Ready to Get Started Now?
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-o sm:gap-6">
          <Transparentbtn
            text="501(c)3 Charities Click Here To Get Started!"
            href="https://freeforcharity.org/hub/cart.php?a=confproduct&i=0"
          />
          <Transparentbtn
            text="Pre-501(c)3 Charities Click Here to Get Started!"
            href="https://freeforcharity.org/hub/cart.php?a=confproduct&i=1"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
