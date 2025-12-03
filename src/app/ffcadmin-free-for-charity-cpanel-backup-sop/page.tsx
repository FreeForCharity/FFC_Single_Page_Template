"use client";

import React from "react";
// import { Search } from "lucide-react";

const NotFoundSection = () => {
  return (
    <div
      className="lg:min-h-screen w-[90%] md:w-[80%] max-w-[1080px] mx-auto "
      id="aria-font"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[79%] float-start pb-[23px] pr-[53px] pt-[138px]">
          <div className="mb-[60px] ">
            <h1 className="pb-[7px] text-[30px] leading-[30px] font-[500] text-[#333]">
              No Results Found
            </h1>
            <p className="text-[14px] leading-[24px] font-[500] text-[#666]">
              The page you requested could not be found. Try refining your
              search, or use the navigation above to locate the post.
            </p>
          </div>
        </div>

        <div className="lg:border-l border-[#DDDDDD] h-full lg:pl-[30px] pb-[28px] w-full lg:w-[20%] float-end lg:pt-[138px]">
          <div className="mb-[30px] flex items-center rounded-[3px] overflow-hidden">
            <input
              type="text"
              className="focus:outline-none w-full p-[0.7em] h-[40px] m-0 text-[14px] leading-normal border border-[#ddd] text-[#666]"
            />
            <input
              type="submit"
              value="Search"
              className="cursor-pointer h-[40px] px-2 bg-[#DDDDDD] text-[#666] text-[14px] font-[400] border border-transparent"
            />
          </div>
          <p className="mb-[10px] text-[18px] leading-[18px] font-[500] text-[#333]">
            Recent Posts
          </p>
          <ul>
            <li className="mb-[7px]">
              <a
                href="https://freeforcharity.org/we-just-updated-for-the-2022-guidestar-platinum-seal/"
                className="text-[14px] text-[#666] leading-[24px] font-[500] hover:text-[#82c0c7]"
              >
                We just updated for the 2022 GuideStar Platinum Seal
              </a>
            </li>
            <li className="mb-[7px]">
              <a
                href="https://freeforcharity.org/our-organization-earned-a-2021-platinum-seal-of-transparency/"
                className="text-[14px] text-[#666] leading-[24px] font-[500] hover:text-[#82c0c7]"
              >
                Our organization earned a 2021 Platinum Seal of Transparency!
              </a>
            </li>
            <li className="mb-[7px]">
              <a
                href="https://freeforcharity.org/what-is-the-cost/"
                className="text-[14px] text-[#666] leading-[24px] font-[500] hover:text-[#82c0c7]"
              >
                What is the cost?
              </a>
            </li>
            <li className="mb-[7px]">
              <a
                href="https://freeforcharity.org/free-for-charity-just-earned-the-platinum-seal-of-transparency/"
                className="text-[14px] text-[#666] leading-[24px] font-[500] hover:text-[#82c0c7]"
              >
                Free For Charity Just Earned the Platinum Seal of Transparency
              </a>
            </li>
            <li className="mb-[7px]">
              <a
                href="https://freeforcharity.org/using-a-registered-agent-service-northwest-registered-agent/"
                className="text-[14px] text-[#666] leading-[24px] font-[500] hover:text-[#82c0c7]"
              >
                Using a Registered Agent Service (Northwest Registered Agent)
              </a>
            </li>
          </ul>

          <p className="my-[30px] text-[18px] leading-[18px] font-[500] text-[#333]">
            Recent Comments
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundSection;
