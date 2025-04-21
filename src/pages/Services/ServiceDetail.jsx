// src/pages/ServiceDetail.jsx
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { servicesData } from "../../constants/servicesData";
import PageNotFound from "../ErrorPages/NotFound";

const ServiceDetail = () => {
  const { category, slug } = useParams();
  console.log(category, slug);

  // Correct data access
  const service = servicesData[category.toLowerCase()]?.find(
    (s) => s.slug === slug
  );
  console.log(service);
  if (!service) return <PageNotFound />;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gray-900 py-32 px-6 sm:py-40 sm:px-12 lg:px-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-30"
            src={service.image}
            alt={service.title}
          />
        </div>
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          <service.icon className="h-16 w-16 text-white mb-6" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            {service.detailedDescription}
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:grid lg:grid-cols-3 lg:gap-8"
        >
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Service Details
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {service.detailedDescription}
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 h-6 w-6 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="ml-2 text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="bg-blue-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700">
                    <span className="font-medium">Expertise:</span>{" "}
                    {service.stats}
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700">
                    <span className="font-medium">Custom Solutions:</span>{" "}
                    Tailored to your specific needs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="ml-2 text-gray-700">
                    <span className="font-medium">Timely Delivery:</span> On
                    schedule, every time
                  </p>
                </li>
              </ul>

              <div className="mt-8">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
