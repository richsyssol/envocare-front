// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "../../constants/servicesData";
import { Building, Leaf } from "lucide-react";
import { fadeIn, staggerContainer } from "../../utils/motion";
import CTA from "../Home/CTA";
import ServicesSection from "./AboutService";
import Testimonials from "../Home/Testimonials";
import ServiceHeroSection from "./ServiceHeroSection";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <ServiceHeroSection />
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your infrastructure and
            environmental needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2"
        >
          {/* Engineering Services Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    <Building className="h-8 w-8" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900">
                    Engineering Services
                  </h2>
                </div>
                <div className="grid gap-4">
                  {servicesData.engineering.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/engineering/${service.slug}`}
                      className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <service.icon className="h-5 w-5 text-gray-500 group-hover:text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Environmental Services Card */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-green-100 text-green-600">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900">
                    Environmental Services
                  </h2>
                </div>
                <div className="grid gap-4">
                  {servicesData.environment.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/environment/${service.slug}`}
                      className="group flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <service.icon className="h-5 w-5 text-gray-500 group-hover:text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-green-600">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>{" "}
      <ServicesSection />
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
        {/* Engineering Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Building className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Engineering Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.engineering.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services/engineering/${service.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Environmental Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Environmental Services
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.environment.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to={`/services/environment/${service.slug}`}
                    className="text-green-600 font-medium hover:text-green-800 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <CTA />
      <Testimonials />
    </div>
  );
};

export default Services;
