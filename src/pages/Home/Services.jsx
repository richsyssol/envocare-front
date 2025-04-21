import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import axios from "axios";
import axiosInstance from "@/services/api";

const ServicesSection = () => {
  const [selectedTab, setSelectedTab] = useState("engineering");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  // const servicesData = {
  //   Engineering: [
  //     {
  //       title: "Urban Infrastructure Planning",
  //       description: "Planning sustainable urban projects efficiently.",
  //       icon: FaBuilding,
  //       imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //     },
  //     {
  //       title: "Water & Wastewater Management",
  //       description: "Efficient water resource management and treatment.",
  //       icon: FaWater,
  //       imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  //     },
  //     {
  //       title: "MEP Works",
  //       description: "Mechanical, Electrical, and Plumbing engineering solutions.",
  //       icon: FaIndustry,
  //       imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //     },
  //     {
  //       title: "Safety Auditor",
  //       description: "Ensuring workplace safety and environmental compliance.",
  //       icon: FaLeaf,
  //       imageUrl: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //     },
  //   ],
  //   Environment: [
  //     {
  //       title: "Environment Clearance",
  //       description: "Helping industries acquire environmental approvals.",
  //       icon: FaLeaf,
  //       imageUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //     },
  //     {
  //       title: "Green Building Certification",
  //       description: "Certification for sustainable, energy-efficient buildings.",
  //       icon: FaBuilding,
  //       imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  //     },
  //     {
  //       title: "Consent from Pollution Board",
  //       description: "Legal compliance and permissions for industries.",
  //       icon: FaWater,
  //       imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
  //     },
  //   ],
  // };
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get(`services/${selectedTab}`);
        console.log(response, `response services section`);
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedTab]);

  // Tabs Configuration
  const tabItems = [
    { key: "engineering", label: "Engineering Division" },
    { key: "environment", label: "Environment Division" },
  ];

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
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

      {/* Ant Design Tabs */}
      <Tabs
        defaultActiveKey="engineering"
        centered
        size="large"
        onChange={(key) => setSelectedTab(key)}
        items={tabItems}
      />

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-10 mt-6"
      >
        {services.map((service, index) => (
          <Parallax key={service.id} speed={-5}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="text-center w-[300px] h-[350px] p-6 shadow-lg transition-transform duration-300 bg-white rounded-lg overflow-hidden">
                <div className="h-40 mb-4 overflow-hidden rounded-md">
                  <img
                    src={`http://127.0.0.1:8000/storage/${service.image_url}`}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
