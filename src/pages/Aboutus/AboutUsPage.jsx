import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import VisionaryLeaders from "./VisionaryLeaders";
import Location from "./Location";
import aboutData from "@/constants/about";
import WhoWeAre from "../Home/WhoWeAre";
import parse, { domToReact } from "html-react-parser";

// Default data structure
const defaultCompanyData = {
  company_overview: `
    Envocare Consulting Pvt. Ltd. is a leading environmental and engineering 
    consultancy firm based in India. We specialize in providing sustainable 
    solutions for infrastructure projects, environmental compliance, and 
    urban development.
  `,
  company_overview_image: "default-company.jpg",
  vision: `
    To be India's most trusted environmental consultancy, transforming infrastructure development through innovative, sustainable solutions that balance economic growth with ecological preservation.
  `,
  mission: `
    To empower businesses and governments with science-based environmental strategies, cutting-edge engineering solutions, and regulatory expertise that drives sustainable development across India.
  `,
};
const BulletIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
const transform = (node) => {
  if (node.name === "p") {
    return <p className="text-gray-700 my-2">{domToReact(node.children)}</p>;
  }
  if (node.name === "li") {
    return (
      <li className="text-gray-500 flex gap-2">
        • {domToReact(node.children)}
      </li>
    );
  }
  return null;
};

const AboutUsPage = () => {
  const location = useLocation();
  const [companyData, setCompanyData] = useState(defaultCompanyData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/companyinformation"
        );
        console.log(response);
        if (response.data) {
          // Merge API data with defaults
          setCompanyData({
            ...defaultCompanyData,
            ...response.data,
          });
        }
      } catch (err) {
        console.error("Error fetching company information:", err);
        setError("Failed to load company information. Showing default data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  if (loading) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company information...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16 "
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Envocare Consulting
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Pioneers in environmental and engineering consulting services
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {[
          { label: "Company Overview", path: "#overview" },
          { label: "Vision & Mission", path: "#vision" },
          { label: "Our Expertise", path: "#expertise" },
          { label: "Leadership Team", path: "#team" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "spring", index * 0.2, 0.75)}
          >
            <Link
              to={item.path}
              className="px-4 py-2 bg-gray-100 hover:bg-green-500 hover:text-white rounded-md transition-colors"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Company Overview Section */}
      <motion.section
        id="overview"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          variants={fadeIn("up", "spring", 0.2, 1)}
        >
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Company Overview
            </h2>
            <div className="space-y-4 text-gray-600 text-base md:text-lg">
              <p
                dangerouslySetInnerHTML={{
                  __html: companyData.company_overview,
                }}
              />
            </div>
          </div>
          <motion.div className="w-full lg:w-1/2" variants={zoomIn(0.4, 1)}>
            <img
              src={`http://127.0.0.1:8000/storage/${companyData.company_overview_image}`}
              alt="Ishani Enterprises Manufacturing Facility"
              className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Manufacturing Facility Section */}
      <motion.section
        id="facilities"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <motion.div
          className="flex flex-col lg:flex-row gap-8 lg:gap-12"
          variants={fadeIn("up", "spring", 0.2, 1)}
        >
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl  md:text-3xl font-semibold mb-4 md:mb-6">
              {companyData.manufacturing_facility_header}
            </h3>

            <div className="w-full max-w-full px-4 md:px-0 overflow-x-hidden">
              {parse(companyData.manufacturing_facility_description, {
                replace: transform,
              })}
            </div>
            <div className="text-base md:text-lg text-gray-600"></div>
          </div>
          <motion.div className="w-full lg:w-1/2" variants={zoomIn(0.4, 1)}>
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {companyData.manufacturing_facility_images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-xl aspect-square"
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/${image}`}
                    alt={`Manufacturing facility ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/images/default-facility.jpg";
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        id="vision"
        className="mb-20 py-10 bg-gray-50 rounded-xl px-8 scroll-mt-20"
        variants={fadeIn("up", "spring", 0.3, 1)}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Vision & Mission
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer(0.1, 0.2)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn("right", "spring", 0.2, 1)}
            >
              <div className="text-green-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">{companyData.vision}</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              variants={fadeIn("left", "spring", 0.4, 1)}
            >
              <div className="text-green-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600">{companyData.mission}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        id="expertise"
        className="mb-20 scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center px-4 mb-20"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-800">
            Our Expertise
          </h2>
          <p className="text-md sm:text-lg max-w-3xl mx-auto mt-3 text-gray-700">
            Our commitment to quality and sustainability ensures top-tier
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center ite gap-6 px-4 sm:px-8">
            {aboutData.expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white w-[500px] text-blue-700 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-md sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-md text-gray-600 mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <WhoWeAre />
        <motion.div
          className="bg-green-50 p-6 rounded-lg border border-green-100"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          <h3 className="text-xl font-semibold mb-3 text-green-800">
            Quality Assurance
          </h3>
          <p className="text-green-700">
            Our projects undergo rigorous quality checks at every stage, from
            initial assessment to final implementation. We adhere to
            international standards and best practices to ensure the highest
            quality deliverables for our clients.
          </p>
        </motion.div>
      </motion.section>

      {/* Over Value */}
      <Location />
      <motion.section
        id="team"
        className="scroll-mt-20"
        variants={staggerContainer(0.1, 0.3)}
      >
        <VisionaryLeaders />
        <motion.div
          className=" bg-gray-50 p-8 rounded-xl"
          variants={fadeIn("up", "spring", 0.5, 1)}
        >
          <h3 className="text-2xl font-semibold text-center mb-6">
            Our Values
          </h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer(0.1, 0.2)}
          >
            {[
              {
                title: "Craftsmanship",
                description:
                  "We honor traditional woodworking techniques while embracing modern precision engineering.",
              },
              {
                title: "Elegance",
                description:
                  "Every French door we create embodies timeless architectural beauty.",
              },
              {
                title: "Precision",
                description:
                  "Millimeter-perfect joinery ensures flawless operation and durability.",
              },
              {
                title: "Sustainability",
                description:
                  "We source FSC-certified woods and use low-VOC finishes for eco-conscious manufacturing.",
              },
              {
                title: "Innovation",
                description:
                  "Continual improvement in hardware and insulation technologies.",
              },
              {
                title: "Client Partnership",
                description:
                  "From architects to homeowners, we collaborate to realize your vision.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 1)}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutUsPage;
