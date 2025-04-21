import React, { useState, useEffect, useCallback } from "react";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { Skeleton, Pagination } from "antd";
import { toast } from "react-toastify";
import { FiExternalLink } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const ProjectCard = React.memo(({ project, onViewDetails }) => {
  return (
    <article className="w-full h-full flex flex-col border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group">
      {project.image ? (
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={`http://127.0.0.1:8000/storage/${project.image}`}
            alt={project.client}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}

      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
            {project.category || "Project"}
          </span>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {project.description}
        </h3>

        <div className="mt-auto space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Client:</span> {project.client}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Capacity:</span> {project.capacity}
          </p>
        </div>
      </div>

      <button
        onClick={onViewDetails}
        className="w-full py-3 px-4 border-t border-gray-100 font-medium text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
      >
        View Details <FiExternalLink className="text-sm" />
      </button>
    </article>
  );
});

const ProjectGrid = ({ projects, loading, onViewDetails }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const getGridColumns = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {!loading
        ? projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewDetails}
            />
          ))
        : Array.from({ length: getGridColumns() * 2 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full h-[350px] rounded-xl"
              active
              paragraph={{ rows: 4 }}
            />
          ))}
    </div>
  );
};

function ProjectDetailSection({ credentials }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const projectsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = credentials.filter(
        (project) =>
          project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(credentials);
    }
    setCurrentPage(1);
  }, [credentials, searchTerm]);

  const handleViewDetails = useCallback((project) => {
    toast.info(
      <div>
        <p className="font-medium">Project Details Coming Soon</p>
        <p className="text-sm mt-1">
          {project.client} - {project.description}
        </p>
      </div>,
      { autoClose: 3000 }
    );
  }, []);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  return (
    <>
      <section className="bg-white pt-20 w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
        {" "}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 1)}
            className="flex flex-col items-center justify-center  text-center mb-16 w-full"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Clients & Projects
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We take pride in our extensive portfolio of successful projects
              across various sectors. Our expertise in water treatment solutions
              has helped numerous clients achieve their environmental and
              operational goals.
            </p>
          </motion.div>
          <div className="min-h-[500px]">
            <ProjectGrid
              projects={paginatedProjects}
              loading={loading}
              onViewDetails={handleViewDetails}
            />
          </div>

          {!loading && filteredProjects.length > projectsPerPage && (
            <div className="mt-8 flex justify-center">
              <Pagination
                current={currentPage}
                total={filteredProjects.length}
                pageSize={projectsPerPage}
                onChange={setCurrentPage}
                showSizeChanger={false}
                className="ant-pagination-custom"
              />
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found matching your search
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default React.memo(ProjectDetailSection);
