import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pagination } from "antd";
import { useMediaQuery } from "react-responsive";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ProjectGrid = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  // Responsive column settings
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const getGridColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4; // Desktop: 4 columns
  };

  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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
          ENVOCARE <span className="text-green-500">Gallery</span>
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
          With over {new Date().getFullYear() - 2010}+ years of experience, our
          portfolio showcases
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.id || index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={`http://127.0.0.1:8000/storage/${project.image}`}
                  alt={project.name || `Project ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="px-3 text-center uppercase flex-grow">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                  {project.name || "Project"}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {data.length > projectsPerPage && (
        <div className="mt-10 flex justify-center">
          <Pagination
            current={currentPage}
            total={data.length}
            pageSize={projectsPerPage}
            onChange={setCurrentPage}
            showSizeChanger={false}
            className="ant-pagination-custom"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
