import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import axiosInstance from "@/services/api";
import { motion } from "framer-motion";

const CTA = () => {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCtaData = async () => {
      try {
        const response = await axiosInstance.get("/ctasection");
        console.log(response, `response cta section`);
        setCtaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching CTA data:", error);
        setLoading(false);
      }
    };

    fetchCtaData();
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

  if (!ctaData) {
    return <div className="text-center py-10">No CTA data available</div>;
  }

  return (
    <ContentWrapper>
      <div
        className={`md:mx-20 md:my-10 ${ctaData.background_color} ${ctaData.text_color} py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between`}
      >
        <div className="flex items-center space-x-4 flex-col md:flex-row gap-4">
          <img
            src={
              ctaData.image_url
                ? import.meta.env.VITE_PUBLIC_IMAGE_PATH +
                  `/${ctaData?.image_url}`
                : "https://ionexchangeglobal.com/app/uploads/2021/09/call-support-full.jpg"
            }
            alt="Support"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl"
          />
          <div>
            <h2 className="text-3xl md:text-2xl font-semibold mb-2">
              {ctaData.title}
            </h2>
            <p className="text-sm md:text-lg font-medium">
              {ctaData.subtitle} <strong>{ctaData.phone_number}</strong>{" "}
              {ctaData.phone_hours}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-6 md:mt-0">
          <a
            href={`tel:${ctaData.phone_number.replace(/\D/g, "")}`}
            className={`flex items-center gap-2 bg-transparent border ${ctaData.text_color} px-6 py-2 text-lg md:text-xs font-medium ${ctaData.hover_color} transition duration-300`}
          >
            <Phone className="w-5 h-5" /> {ctaData.call_button_text}
          </a>
          <Link
            to={ctaData.contact_button_link}
            className={`text-center bg-transparent border ${ctaData.text_color} px-6 py-2 text-lg md:text-xs font-medium ${ctaData.hover_color} transition duration-300`}
          >
            {ctaData.contact_button_text}
          </Link>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CTA;
