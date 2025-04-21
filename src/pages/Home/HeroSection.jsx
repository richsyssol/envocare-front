import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import axiosInstance from "@/services/api";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroSection = async () => {
      try {
        const response = await axiosInstance.get("/hero-sections");
        console.log(response, `response Hero Section`);
        setHeroContent(response.data);
      } catch (error) {
        console.error("Error fetching HeroContent:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroSection();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (heroContent.length === 0) return null;

  const { image_url, title, description } = heroContent[currentIndex];

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
    <div className="relative shadow-xl w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden rounded-b-[20%] md:rounded-b-[15%]">
      <motion.div
        key={image_url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60"
        style={{
          backgroundImage:
            `url(` + import.meta.env.VITE_PUBLIC_IMAGE_PATH + `/${image_url})`,
        }}
      ></motion.div>

      <button
        onClick={prevImage}
        className="hidden md:flex absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="hidden md:flex absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-3 rounded-full z-10"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        key={title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
