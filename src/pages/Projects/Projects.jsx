import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Spin } from "antd";
import ProjectDetailSection from "./ProjectDetailSection";
import axios from "axios";
import { fadeIn, staggerContainer } from "../../utils/motion";
import {
  CIIDCO,
  DeolaliBoard,
  ISP,
  ISRO,
  Kinfra,
  MAGNUM,
  MinistryDef,
  nskCorp,
  PWD,
  ResearchSociety,
  SMBT,
  Sula,
  vikasPrerna,
  WapcoSs,
  York,
} from "../../../public/assets";
import ProjectListing from "./ProjectLisitng";
import ProjectCarousel from "./ProjectCarousel";
import ProjectGrid from "./ProjectGrid";

const images = [
  { name: "CIIDCO", src: CIIDCO },
  { name: "DeolaliBoard", src: DeolaliBoard },
  { name: "ISP", src: ISP },
  { name: "ISRO", src: ISRO },
  { name: "Kinfra", src: Kinfra },
  { name: "MAGNUM", src: MAGNUM },
  { name: "MinistryDef", src: MinistryDef },
  { name: "nskCorp", src: nskCorp },
  { name: "PWD", src: PWD },
  { name: "ResearchSociety", src: ResearchSociety },
  { name: "SMBT", src: SMBT },
  { name: "Sula", src: Sula },
  { name: "vikasPrerna", src: vikasPrerna },
  { name: "WapcoSs", src: WapcoSs },
  { name: "York", src: York },
];

const credentials = [
  {
    id: 1,
    description:
      "Industrial building Works - Civil, Purchase, Erection, installation and commissioning of Plant and Machinery for City of Pharmay Pvt Ltd",
    capacity: "5000 Sqm",
    client: "City of Pharmay Pvt Ltd",
    image: "",
  },
  {
    id: 2,
    description:
      "Augmentation of ETP at Rubber Park, Irapuram, Ernakulam - Construction and commissioning of 250cum/day capacity Common Effluent Treatment Plant Equivalent to 1.5 MLD STP",
    capacity: "250 KLD",
    client: "KINFRA (Kerala Industrial Infrastructure Development Corporation)",
    image: Kinfra,
  },
  {
    id: 3,
    description:
      "Construction of Sewage Treatment Plant (STP) using SBR Technology near existing STP at building No. 37A at SAC, Ahmedabad – Civil works for STP including pumps, diffused air system & filters etc.",
    capacity: "115 KLD",
    client:
      "Government Of India, Department Of Space, Space Applications Centre",
    image: "",
  },
  {
    id: 4,
    description:
      "Construction Of 200 KLD Sewage Treatment in the Multistoried Building of Sassoon General Hospital and B. J. Medical College Pune",
    capacity: "200 KLD",
    client: "PUNE PUBLIC WORKS DIVISION, PUNE",
    image: "",
  },
  {
    id: 5,
    description:
      "CONSTRUCTION OF 200 KLD SEWAGE TREATMENT IN THE MULTISTORIED BUILDING OF SASSOON GENERAL HOSPITAL AND B. J. MEDICAL COLLEGE PUNE",
    capacity: "115 KLD",
    client: "PUBLIC WORKS REGION, PUNE",
    image: "",
  },
  {
    id: 6,
    description:
      "Design, Supply, Installation, Testing and commissioning of Effluent treatment Plant on turnkey basis",
    capacity: "50 KLD",
    client:
      "Security Printing and Mining Corporation of India Limited, India Security Press, Nashik",
    image: "",
  },
  {
    id: 7,
    description:
      "Design, Supply, erection, successful commissioning for 45 KLD Winery Effluent treatment Plant at Bangalore Plant",
    capacity: "45 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 8,
    description:
      "Design, Supply, erection, successful commissioning of primary treatment & sludge handling system for upgradation of 90 KLD Winery Effluent treatment Plant at Nashik Plant",
    capacity: "90 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 9,
    description:
      "Design of 30 KLD Upflow anaerobic Bioreactor, 120 KLD Membrane Bioreactor and sludge handling system for upgradation of Existing Winery Effluent treatment Plant at Dindori Plant",
    capacity: "120 KLD",
    client: "SULA Vineyards Pvt Ltd",
    image: "",
  },
  {
    id: 10,
    description:
      "Design, Supply, erection, successful commissioning of 1000KLD Sewage treatment Plant at Nashik",
    capacity: "1000 KLD",
    client: "Sun Infrastructure Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 11,
    description:
      "Design, Supply, erection, successful commissioning of 30 KLD Effluent treatment Plant at Artisan Spirit Pvt Ltd, Nashik",
    capacity: "30 KLD",
    client: "Artisan Spirit Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 12,
    description:
      "Design, Supply, erection, successful commissioning of 27KLD Effluent treatment Plant at Nashik",
    capacity: "27 KLD",
    client: "Magnum Heart Institute, Nashik",
    image: "",
  },
  {
    id: 13,
    description:
      "Design, Supply, erection, successful commissioning of 65KLD Sewage treatment Plant at Nashik",
    capacity: "65 KLD",
    client: "Chopda Medicare & Research Centre Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 14,
    description: "DPR preparation for Upgradation of Tapovan & Agartakli STP",
    capacity: "130 MLD / 110 MLD",
    client: "Nashik Municipal Corporation",
    image: "",
  },
  {
    id: 15,
    description:
      "Design, Supply, erection, successful commissioning of package 15 KLD Sewage treatment Plant at Ekdara Hospital of SMBT, Nagar",
    capacity: "15 KLD",
    client: "SMBT, Ekdara, Ahmednagar",
    image: "",
  },
  {
    id: 16,
    description:
      "Design, Supply, erection, successful commissioning of package 1500 KLD Sewage Pumping Station at SMBT, Nashik",
    capacity: "1500 KLD",
    client: "SMBT, Nandi Hills, Nashik",
    image: "",
  },
  {
    id: 17,
    description:
      "Design, Supply, erection, successful commissioning of package 12 KLD Sewage treatment Plant at Suyojit Baug, Nashik",
    capacity: "12 KLD",
    client: "Sun Infrastructure Pvt Ltd, Nashik",
    image: "",
  },
  {
    id: 18,
    description:
      "Consultancy Services for preparing Basic engineering package and GA drawing preparation for 4 MLD SPS & STP for Dombivali MIDC, Dombivali",
    capacity: "4.0 MLD",
    client: "MIDC, Dombivali",
    image: "",
  },
  {
    id: 19,
    description:
      "Consultancy Services for preparing Basic engineering package and GA drawing preparation for 40 MLD SPS for Jodhpur Municipal Corporation, Jodhpur",
    capacity: "40.0",
    client: "Jodhpur Municipal Corporation, Jodhpur",
    image: "",
  },
  {
    id: 20,
    description:
      "Consultancy Services for preparing DPR for 7.0 MLD STP for Ambad Municipal Council, Ambad, Jalana",
    capacity: "7.0",
    client: "CIDCO",
    image: "",
  },
  {
    id: 21,
    description:
      "Consultancy Services for detail engineering of STP for Heesargatta, Banglore drainage scheme.",
    capacity: "5.0",
    client: "BWSSB",
    image: "",
  },
  {
    id: 22,
    description:
      "Consultancy Services for preparing DPR for Sewage Treatment Plant (STP) of capacity 6.2 MLD for Indapur Underground Sewerage Scheme Dist. Pune",
    capacity: "6.2",
    client: "Indapur Municipal Council, Indapur, Pune",
    image: "",
  },
];

function Projects() {
  const [clients, setClients] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch clients data
        const clientsResponse = await axios.get("/api/clients");
        console.log(clientsResponse);
        setClients(clientsResponse.data);

        // Fetch gallery data
        const galleryResponse = await axios.get("/api/gallery");
        console.log(galleryResponse);

        setGallery(galleryResponse.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
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
  const renderCardImage = (image) =>
    image ? (
      <img
        src={image}
        alt="Project"
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
    ) : (
      <div className="w-full h-40 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
    );

  return (
    <div className="mt-26 bg-white pt-10">
      {/* Static Content Section */}
      {/* Page Header */}
      <section className="mb-8 px-4 md:px-8 ">
        <motion.div
          variants={fadeIn("up", "spring", 0.1, 1)}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-green-600 font-semibold mb-2"
          >
            Engineering Sustainable Solutions
          </motion.p>

          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            ENVOCARE <span className="text-green-500">Projects</span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="w-24 h-1 bg-green-500 mx-auto origin-left"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
          >
            With over {new Date().getFullYear() - 2010}+ years of experience,
            our portfolio showcases
            <span className="font-medium text-gray-800">
              {" "}
              500+ successful projects{" "}
            </span>
            delivering innovative water treatment solutions across industries.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 mt-6 max-w-3xl mx-auto"
          >
            From municipal wastewater plants to industrial effluent treatment
            systems, each project reflects our commitment to environmental
            stewardship and engineering excellence.
          </motion.p>
        </motion.div>
      </section>{" "}
      <ProjectDetailSection credentials={clients} />
      <ProjectGrid data={gallery} />
      <ProjectCarousel data={gallery} />
      {/* Additional Static Content */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Design Excellence</h3>
              <p className="text-gray-600">
                Our projects begin with meticulous planning and innovative
                design to ensure optimal performance and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Quality Execution</h3>
              <p className="text-gray-600">
                We maintain strict quality control throughout project execution,
                using only the best materials and techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Sustainable Solutions
              </h3>
              <p className="text-gray-600">
                Our focus on sustainability ensures that our projects deliver
                long-term environmental and economic benefits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
