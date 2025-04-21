import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail, MdOutlineFactory } from "react-icons/md";
import {
  IoLocationOutline,
  IoCallOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

const ContactUsPage = () => {
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook", url: "#" },
    { icon: FaTwitter, label: "Twitter", url: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", url: "#" },
    { icon: FaInstagram, label: "Instagram", url: "#" },
    { icon: FaWhatsapp, label: "WhatsApp", url: "#" },
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
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mt-24 mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact ENVOCARE Consulting Pvt. Ltd.
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get in touch with our team for environmental consulting, engineering
          services, or infrastructure project inquiries
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Request a Consultation
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject *
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"
                required
              >
                <option value="">Select a subject</option>
                <option value="urban-planning">
                  Urban Infrastructure Planning
                </option>
                <option value="water-management">
                  Water & Wastewater Management
                </option>
                <option value="mep">MEP Works</option>
                <option value="safety-audit">Safety Audit</option>
                <option value="bio-digester">
                  Bio-digester & Bio-composting
                </option>
                <option value="rainwater">Rainwater Harvesting</option>
                <option value="environment-clearance">
                  Environment Clearance
                </option>
                <option value="green-building">
                  Green Building Certification
                </option>
                <option value="pollution-consent">
                  Pollution Control Board Consent
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-600 focus:border-green-600"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <IoCallOutline size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    {contactData?.tel_number || ""}
                  </p>
                  <p className="text-gray-600">
                    {contactData?.mobile_number || ""}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MdOutlineEmail size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">{contactData?.email || ""}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaWhatsapp size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">
                    {contactData?.whatsapp_number || ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4">
                Connect With Us
              </h3>
              <div className="flex gap-4">
                {socialIcons.map(({ icon: Icon, label, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow-sm hover:bg-green-100 text-gray-600 hover:text-green-600 transition-colors"
                    title={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <IoLocationOutline size={24} className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Main Office
                </h3>
              </div>
              <address className="text-gray-600 not-italic pl-9">
                {contactData?.corporate_address_line1 || ""}
                <br />
                {contactData?.corporate_address_line2 || ""}
                <br />
                {contactData?.corporate_address_line3 || ""}
                <br />
                {contactData?.corporate_address_line4 || ""}
                <br />
                {contactData?.corporate_address_line5 || ""}
              </address>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <MdOutlineFactory size={24} className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Regional Office
                </h3>
              </div>
              <address className="text-gray-600 not-italic pl-9">
                {contactData?.factory_address_line1 || ""}
                <br />
                {contactData?.factory_address_line2 || ""}
                <br />
                {contactData?.factory_address_line3 || ""}
                <br />
                {contactData?.factory_address_line4 || ""}
                <br />
                {contactData?.factory_address_line5 || ""}
              </address>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <IoDocumentTextOutline size={24} className="text-green-600" />
                <h3 className="text-xl font-semibold text-gray-800">
                  Business Hours
                </h3>
              </div>
              <div className="text-gray-600 not-italic pl-9">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="mt-16 bg-gray-50 rounded-xl overflow-hidden"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-8 pt-8">
          Our Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Corporate Office Map */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Main Office
            </h3>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60266.009091746004!2d72.92750715846337!3d19.25514353836347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1903%2C%20Sapphire%2C%20Regency%20Tower%2C%20Ghodbunder%20Road%2C%20Thane%20-!5e0!3m2!1sen!2sin!4v1745150845560!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ENVOCARE Corporate Office"
              ></iframe>
            </div>
          </div>

          {/* Regional Office Map */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Regional Office
            </h3>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119965.1380912402!2d73.72127257085413!3d20.012267955551074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%2C%20Archit%20Vihar%2C%20Shrirang%20Nagar%2C%20Gangapur%20Road%2C%20Nashik%20-%20422%20013!5e0!3m2!1sen!2sin!4v1745150933749!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="ENVOCARE Regional Office"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Schema Markup (invisible) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ENVOCARE Consulting Pvt. Ltd.",
      "url": "https://www.envocare.com",
      "logo": "https://www.envocare.com/logo.png",
      "description": "Environmental and Engineering Consulting Services for Infrastructure Projects",
      "address": [
        {
          "@type": "PostalAddress",
          "name": "Main Office",
          "streetAddress": "1903, Sapphire, Regency Tower, Ghodbunder Road",
          "addressLocality": "Thane (West)",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "name": "Regional Office",
          "streetAddress": "3, Archit Vihar, Shrirang Nagar, Gangapur Road",
          "addressLocality": "Nashik",
          "postalCode": "422013",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "00:00",
          "closes": "00:00"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "${contactData?.tel_number || "+912532465140"}",
          "contactType": "customer service",
          "email": "${contactData?.email || "info@envocare.com"}",
          "areaServed": "IN"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/envocare",
        "https://www.twitter.com/envocare",
        "https://www.linkedin.com/company/envocare",
        "https://www.instagram.com/envocare"
      ]
    }
  `}
        </script>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;
