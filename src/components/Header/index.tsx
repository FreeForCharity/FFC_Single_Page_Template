"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  path: string;
}

interface MenuItem {
  label: string;
  path: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null); // 🔹 dropdown control
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { label: "Home", path: "/", hasDropdown: false },
    {
      label: "Help for Charities",
      path: "/help-for-charities",
      hasDropdown: true,
      dropdownItems: [
        { label: "Help for Charities", path: "/help-for-charities" },
        { label: "501c3 Onboarding Guide", path: "/501c3" },
        { label: "Pre501c3 Onboarding Guide", path: "/pre501c3" },
        {
          label: "Online Impacts Onboarding Guide",
          path: "/online-impacts-onboarding-guide",
        },
        { label: "GuideStar Profile Setup Guide", path: "/guidestar-guide" },
        {
          label:
            "Understanding Your Free For Charity WordPress Website Hosting: A Layered Approach",
          path: "/techstack",
        },
        {
          label:
            "Charity Validation Guide – Ensuring Mutual Benefit Through Comprehensive Validation Processes",
          path: "/charity-validation-guide-ensuring-mutual-benefit-through-comprehensive-validation-processes",
        },
      ],
    },
    {
      label: "Volunteer",
      path: "/volunteer",
      hasDropdown: true,
      dropdownItems: [
        { label: "Volunteer", path: "/volunteer" },
        {
          label: "FFC Volunteer Proving Ground: Core Competencies",
          path: "/ffc-volunteer-proving-ground-core-competencies",
        },
        {
          label: "Free For Charity (FFC) Web Developer Training Guide",
          path: "/free-for-charity-ffc-web-developer-training-guide",
        },
      ],
    },
    {
      label: "Donate",
      path: "/donate",
      hasDropdown: true,
      dropdownItems: [
        { label: "Donate", path: "/donate" },
        {
          label: "Free For Charity Endowment Fund",
          path: "/free-for-charity-endowment-fund",
        },
      ],
    },
    {
      label: "About Us",
      path: "/about-us",
      hasDropdown: true,
      dropdownItems: [{ label: "Contact Us", path: "/contact-us" }],
    },
    {
      label: "Other",
      path: "#",
      hasDropdown: true,
      dropdownItems: [
        { label: "Free For Charity Domains", path: "/domains" },
        {
          label: "Free for Charity’s Tools for Success",
          path: "/free-for-charitys-tools-for-success",
        },
        {
          label: "Free Charity Web Hosting",
          path: "/free-charity-web-hosting",
        },
      ],
    },
    {
      label: "FFCAdmin",
      path: "/ffcadmin",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "Free For Charity (FFC) Service Delivery Stages",
          path: "/free-for-charity-ffc-service-delivery-stages",
        },
        {
          label: "FFC Admin cPanel Backup",
          path: "/ffcadmin-free-for-charity-cpanel-backup-sop",
        },
      ],
    },
  ];

  const handleSearchToggle = () => setIsSearchOpen(!isSearchOpen);
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null); // 🔹 also close dropdowns on any click
  };

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? "h-[55px]" : "h-[80px]"
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex items-center px-2 transition-all duration-300">
            {/* Logo */}
            <div
              className={`transition-all duration-300 ${
                isScrolled ? "w-[110px]" : "w-[150px]"
              }`}
            >
              <Link href="/" onClick={handleLinkClick} className="block">
                <img
                  src="https://freeforcharity.org/wp-content/uploads/2024/04/Screenshot_145.png"
                  alt="Free For Charity"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-7" : "h-11"
                  }`}
                />
              </Link>
            </div>

            {/* Menu or Search */}
            {!isSearchOpen ? (
              <div className="flex items-center justify-end sm:pl-[50px] md:pl-[70px] w-full">
                {/* Desktop Menu */}
                <nav className="hidden lg:block transition-all duration-300">
                  <ul className="flex items-center space-x-[1px] font-navbar font-[600]">
                    {menuItems.map((item, index) => {
                      const isActive =
                        pathname === item.path ||
                        item.dropdownItems?.some((d) => d.path === pathname);
                      const isOpen = activeDropdown === index;

                      return (
                        <li
                          key={index}
                          className="relative py-6"
                          onMouseEnter={() => setActiveDropdown(index)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <Link
                            href={item.path}
                            onClick={handleLinkClick}
                            className={`flex items-center px-3 py-2 text-[14px] transition-colors duration-200 ${
                              isActive
                                ? "text-blue-600"
                                : "text-gray-600 hover:text-gray-500"
                            }`}
                          >
                            {item.label}
                            {item.hasDropdown && (
                              <FiChevronDown className="ml-1 mt-[3px] h-4 w-4" />
                            )}
                          </Link>

                          {item.hasDropdown && isOpen && (
                            <div
                              className={`absolute left-0 ${
                                isScrolled ? "top-[82%]" : "top-[97%]"
                              } border-t-3 border-[#2EA3F2] px-3 shadow-[0_2px_5px_rgba(0,0,0,0.1)] bg-white min-w-[240px] z-50`}
                            >
                              <div className="px-1 py-[20px]">
                                {item.dropdownItems?.map(
                                  (dropItem, dropIndex) => {
                                    const isDropActive =
                                      pathname === dropItem.path;
                                    return (
                                      <Link
                                        key={dropIndex}
                                        href={dropItem.path}
                                        onClick={handleLinkClick}
                                        className={`block px-6 py-2 text-[14px] transition-colors duration-200 leading-[28px] ${
                                          isDropActive
                                            ? "text-blue-600 bg-[#F0F7FF]"
                                            : "text-gray-700 hover:bg-[#F9F9F9] hover:text-gray-500"
                                        }`}
                                      >
                                        {dropItem.label}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Search Icon */}
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={handleSearchToggle}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <LiaSearchSolid className="h-5 w-5 cursor-pointer" />
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                >
                  {isMobileMenuOpen ? (
                    <RxCross2 className="h-6 w-6" />
                  ) : (
                    <FiMenu className="h-6 w-6" />
                  )}
                </button>
              </div>
            ) : (
              // Search Input
              <div className="w-full max-w-[750px] ml-auto flex items-center justify-between transition-all duration-300">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchToggle}
                  className="ml-2 p-2 text-gray-600"
                >
                  <RxCross2 className="cursor-pointer h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? "top-[53px]" : "top-[77px]"
            }`}
          >
            <div
              className={`max-w-[700px] mx-auto px-6 p-[5%] bg-white border-t-[3px] border-[#2EA3F2] shadow-[0_2px_5px_rgba(0,0,0,0.1)] h-[80vh] overflow-auto`}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => {
                  const isActive =
                    pathname === item.path ||
                    item.dropdownItems?.some((d) => d.path === pathname);
                  return (
                    <li key={index}>
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 rounded-lg text-sm font-[600] ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <ul className="ml-4 mt-1">
                          {item.dropdownItems?.map((dropItem, dropIndex) => {
                            const isDropActive = pathname === dropItem.path;
                            return (
                              <li key={dropIndex}>
                                <Link
                                  href={dropItem.path}
                                  onClick={handleLinkClick}
                                  className={`block px-4 py-2 text-sm rounded-lg ${
                                    isDropActive
                                      ? "bg-blue-50 text-blue-600"
                                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                  }`}
                                >
                                  {dropItem.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
