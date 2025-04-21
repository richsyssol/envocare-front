import { useEffect, useState } from "react";
import axios from "axios";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";
import axiosInstance from "@/services/api";

const FeatureSection = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axiosInstance.get("/features");
        console.log(response, `response Features Section`);
        setFeatures(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching features:", error);
        setLoading(false);
      }
    };

    fetchFeatures();
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

  // {
  //   "features": [
  //     {
  //       "id": 1,
  //       "title": "Expert Engineering Solutions",
  //       "description": "Our team of certified engineers delivers innovative and efficient solutions for complex infrastructure challenges.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/3271/3271166.png",
  //       "order": 1,
  //       "is_active": true
  //     },
  //     {
  //       "id": 2,
  //       "title": "Environmental Compliance",
  //       "description": "We ensure all projects meet stringent environmental regulations and sustainability standards.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/1570/1570887.png",
  //       "order": 2,
  //       "is_active": true
  //     },
  //     {
  //       "id": 3,
  //       "title": "End-to-End Project Management",
  //       "description": "From concept to completion, we manage every aspect of your environmental infrastructure projects.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/3058/3058965.png",
  //       "order": 3,
  //       "is_active": true
  //     },
  //     {
  //       "id": 4,
  //       "title": "Cutting-Edge Technology",
  //       "description": "We utilize the latest technologies in water treatment, waste management, and sustainable design.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
  //       "order": 4,
  //       "is_active": true
  //     },
  //     {
  //       "id": 5,
  //       "title": "Proven Track Record",
  //       "description": "With numerous successful projects across multiple sectors, we deliver results you can trust.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
  //       "order": 5,
  //       "is_active": true
  //     },
  //     {
  //       "id": 6,
  //       "title": "Customized Solutions",
  //       "description": "Tailored approaches designed specifically for your project's unique requirements and challenges.",
  //       "image_url": "https://cdn-icons-png.flaticon.com/512/1570/1570937.png",
  //       "order": 6,
  //       "is_active": true
  //     }
  //   ]
  // }
  return (
    <div className="relative my-20 min-h-[700px] text-gray-700">
      <ContentWrapper>
        <div className="text-center">
          <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
            Why Choose
            <span className="bg-gradient-to-r m-2 from-blue-600 to-blue-900 text-transparent bg-clip-text">
              EnvoCare ?
            </span>
          </h3>{" "}
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive environmental and engineering solutions for
            sustainable infrastructure
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-6 mt-10 lg:mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full shadow-md px-6 rounded-2xl py-6 active:scale-95 bg-white overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 175, 233, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col justify-center items-center text-center">
                <motion.div
                  className="border  rounded-full flex justify-center items-center p-4 cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px] hover:shadow-blue-500"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`${
                      import.meta.env.VITE_PUBLIC_IMAGE_PATH +
                      `/${feature.image_url}`
                    }`}
                    alt={feature.title}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </motion.div>
                <h5 className="mt-3 mb-2 text-md md:text-lg font-semibold">
                  {feature.title}
                </h5>
                <p className="text-md md:text-lg text-neutral-600 px-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContentWrapper>
    </div>
  );
};

export default FeatureSection;
