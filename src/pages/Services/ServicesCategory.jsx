// src/pages/ServicesCategory.jsx
import { useParams } from "react-router-dom";
import { servicesData } from "../../constants/servicesData";
import { motion } from "framer-motion";

const ServicesCategory = () => {
  const { category } = useParams();
  // Convert to lowercase to match data structure
  const categoryServices = servicesData[category.toLowerCase()] || [];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
          {category} Services
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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
                  <h2 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={`/services/${category}/${service.slug}`}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;
