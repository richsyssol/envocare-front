import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import axios from "axios";
import { navLogo } from "../../../public/assets";

const Footer = () => {
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaRss,
    FaYoutube,
    FaInstagram,
  ];
  const [contactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/contact");
        console.log(response);
        setContactData(response.data || null);
      } catch (error) {
        console.error("Error fetching contact information:", error);
        setContactData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"></div>
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Preparing your experience
          </motion.p>
        </div>
      </div>
    );
  }
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={navLogo} alt="Company Logo" className="mb-6 w-42" />
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            ABOUT COMPANY
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Milestones</li>
            <li>Manufacturing</li>
            <li>Investor Relations</li>
            <li>Awards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">PRODUCTS</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Engineering</li>
            <li>Resins</li>
            <li>Specialty Chemicals</li>
            <li>Membranes</li>
            <li>Instruments & Automation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">SERVICES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Operation & Maintenance</li>
            <li>Rehabilitation & Modification</li>
            <li>Consumables & Spares</li>
            <li>Audits & Consultancy</li>
            <li>Project Financing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            OUR LOCATIONS
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>APAC</li>
            <li>Europe</li>
            <li>India</li>
            <li>Middle East</li>
            <li>North America</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="mt-10 flex justify-center space-x-6">
          {socialIcons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer text-gray-400 hover:text-blue-400"
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-col justify-center items-start text-gray-300">
          <div className="flex text-left ">
            <IoLocationOutline size={20} className="inline mr-2" />{" "}
            <address className=" not-italic ">
              {contactData?.factory_address_line1 || ""}
              {contactData?.factory_address_line2 || ""}
              <br />
              {"  " + contactData?.factory_address_line3 || ""}
              {contactData?.factory_address_line4 || ""}
              <br />
              {contactData?.factory_address_line5 || ""}
            </address>
          </div>
          <p>
            <IoCallOutline size={20} className="inline mr-2" />{" "}
            {contactData?.mobile_number || "+91 9970436943"}
          </p>
          <p>
            <MdOutlineEmail size={20} className="inline mr-2" />{" "}
            {contactData?.email || "envocares@gmail.com"}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>
          © 2025 All Rights Reserved by Rich System Solution.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
