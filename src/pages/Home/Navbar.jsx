import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLogo } from "../../../public/assets";
import { FaBuilding, FaWater, FaIndustry, FaLeaf } from "react-icons/fa";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
// Combined Services Data
const servicesData = {
  Engineering: [
    {
      title: "Urban Infrastructure Planning",
      path: "urban-infrastructure-planning",
      description: "Planning sustainable urban projects efficiently.",
      icon: FaBuilding,
    },
    {
      title: "Water & Wastewater Management",
      path: "water-wastewater-management",
      description: "Efficient water resource management and treatment.",
      icon: FaWater,
    },
    {
      title: "MEP Works",
      path: "mep-works",
      description:
        "Mechanical, Electrical, and Plumbing engineering solutions.",
      icon: FaIndustry,
    },
    {
      title: "Safety Auditor",
      path: "safety-auditor",
      description: "Ensuring workplace safety and environmental compliance.",
      icon: FaLeaf,
    },
  ],
  Environment: [
    {
      title: "Environment Clearance",
      path: "environment-clearance",
      description: "Helping industries acquire environmental approvals.",
      icon: FaLeaf,
    },
    {
      title: "Green Building Certification",
      path: "green-building-certification",
      description: "Certification for sustainable, energy-efficient buildings.",
      icon: FaBuilding,
    },
    {
      title: "Consent from Pollution Board",
      path: "pollution-board-consent",
      description: "Legal compliance and permissions for industries.",
      icon: FaWater,
    },
  ],
};

const navItems = [
  { label: "HOME", path: "/" },
  {
    label: "ABOUT US",
    submenu: [
      { label: "Company Overview", path: "/aboutus#overview" },
      { label: "Vision & Mission", path: "/aboutus#vision" },
      { label: "Our Team", path: "/aboutus#team" },
      { label: "Why Choose Us", path: "/aboutus#why-us" },
    ],
  },
  {
    label: "SERVICES",
    submenu: [
      {
        label: "Engineering Services",
        path: "/services/engineering",
        submenu: servicesData.Engineering.map((service) => ({
          label: service.title,
          path: `/services/engineering/${service.path}`,
        })),
      },
      {
        label: "Environmental Services",
        path: "/services/environment",
        submenu: servicesData.Environment.map((service) => ({
          label: service.title,
          path: `/services/environment/${service.path}`,
        })),
      },
      { label: "All Services", path: "/services" },
    ],
  },
  { label: "PROJECTS", path: "/projects" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT US", path: "/contactus" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [hideTopBar, setHideTopBar] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null);
  };

  const handleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaRss,
    FaYoutube,
    FaInstagram,
  ];
  return (
    <header className="relative z-[100]">
      {/* Top Contact Bar */}
      <div
        className={`bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 text-sm px-4 md:px-10 transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-[100]`}
      >
        <ContentWrapper>
          <div className="flex flex-col md:flex-row gap-2 justify-between items-center py-2">
            <div className="flex items-center space-x-4">
              <a
                href="mailto:envocares@gmail.com"
                className="hover:text-green-400 text-xs md:text-md transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                envocares@gmail.com
              </a>
              <a
                href="tel:+919970436943"
                className="hover:text-green-400 text-xs md:text-md transition-colors flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9970436943
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              {socialIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  className="cursor-pointer text-gray-400 hover:text-blue-400"
                >
                  <Icon size={12} />
                </motion.div>
              ))}
            </div>
          </div>
        </ContentWrapper>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed  pt-2 md:pt-0 w-full left-0 transition-all duration-300 z-[90] shadow-sm bg-white"
        style={{ top: hideTopBar ? "0" : "30px" }}
      >
        <ContentWrapper>
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img src={navLogo} alt="logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-6 font-medium text-gray-800 relative">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleDropdown(index)}
                  onMouseLeave={() => item.submenu && handleDropdown(null)}
                >
                  <button
                    onClick={() => !item.submenu && navigate(item.path)}
                    className={`hover:text-green-600 flex items-center gap-1 transition-colors ${
                      openDropdown === index ? "text-green-600" : ""
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {openDropdown === index && item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-10 left-0 bg-white rounded-lg shadow-xl py-2 px-3 min-w-[220px] z-[120] border border-gray-100"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <div key={subIndex} className="relative">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              onClick={() =>
                                !subItem.submenu && navigate(subItem.path)
                              }
                              onMouseEnter={() =>
                                subItem.submenu && handleSubDropdown(subIndex)
                              }
                              className={`hover:bg-yellow-50 px-3 py-2 rounded text-sm text-gray-700 cursor-pointer transition-colors hover:text-green-600 flex justify-between items-center ${
                                subItem.submenu ? "pr-8" : ""
                              }`}
                            >
                              {subItem.label}
                              {subItem.submenu && (
                                <ChevronDown
                                  size={14}
                                  className={`ml-2 transition-transform ${
                                    openSubDropdown === subIndex
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              )}
                            </motion.div>

                            {/* Second Level Dropdown for Services */}
                            {subItem.submenu &&
                              openSubDropdown === subIndex && (
                                <motion.div
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 10 }}
                                  className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl py-2 px-3 min-w-[220px] z-[130] border border-gray-100"
                                  onMouseLeave={() => handleSubDropdown(null)}
                                >
                                  {subItem.submenu.map(
                                    (subSubItem, subSubIndex) => (
                                      <motion.div
                                        key={subSubIndex}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: subSubIndex * 0.05,
                                        }}
                                        onClick={() =>
                                          navigate(subSubItem.path)
                                        }
                                        className="hover:bg-yellow-50 px-3 py-2 rounded text-sm text-gray-700 cursor-pointer transition-colors hover:text-green-600"
                                      >
                                        {subSubItem.label}
                                      </motion.div>
                                    )
                                  )}
                                </motion.div>
                              )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-green-600 pr-5 transition-colors"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </ContentWrapper>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white z-[110] shadow-xl p-6 space-y-4 overflow-y-auto"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800 hover:text-green-600"
            >
              <X size={28} />
            </button>

            <div className="mt-10 space-y-6">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <button
                    onClick={() => {
                      if (!item.submenu) {
                        navigate(item.path);
                        toggleMenu();
                      } else {
                        handleDropdown(openDropdown === index ? null : index);
                      }
                    }}
                    className={`w-full text-left font-semibold text-lg ${
                      item.submenu
                        ? "text-gray-900"
                        : "text-gray-800 hover:text-green-600"
                    } py-2 flex justify-between items-center`}
                  >
                    {item.label}
                    {item.submenu && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {/* Mobile Submenu */}
                  {item.submenu && openDropdown === index && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.submenu.map((sub, subIndex) => (
                        <div key={subIndex}>
                          <button
                            onClick={() => {
                              if (!sub.submenu) {
                                navigate(sub.path);
                                toggleMenu();
                              } else {
                                handleSubDropdown(
                                  openSubDropdown === subIndex ? null : subIndex
                                );
                              }
                            }}
                            className="w-full text-left pl-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer flex justify-between items-center"
                          >
                            <div className="flex items-center">
                              <span className="text-green-500 mr-2">•</span>
                              {sub.label}
                            </div>
                            {sub.submenu && (
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  openSubDropdown === subIndex
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </button>
                          {/* Second Level Mobile Submenu */}
                          {sub.submenu && openSubDropdown === subIndex && (
                            <div className="ml-4 space-y-1">
                              {sub.submenu.map((subSub, subSubIndex) => (
                                <motion.div
                                  key={subSubIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subSubIndex * 0.05 }}
                                  onClick={() => {
                                    navigate(subSub.path);
                                    toggleMenu();
                                  }}
                                  className="pl-6 py-1 text-gray-600 hover:text-green-600 cursor-pointer flex items-center"
                                >
                                  <span className="text-green-400 mr-2">-</span>
                                  {subSub.label}
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <a
                href="mailto:envocares@gmail.com"
                className="text-gray-700 hover:text-green-600 flex items-center mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                envocares@gmail.com
              </a>
              <a
                href="tel:+919970436943"
                className="text-gray-700 hover:text-green-600 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9970436943
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
