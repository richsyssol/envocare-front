import React from "react";
import { Card } from "antd";

const ProjectListing = ({ credentials }) => {
  const renderCardImage = (image) =>
    image ? (
      <img
        src={`http://127.0.0.1:8000/storage/${image}`}
        // Assuming images are stored in Laravel's storage
        alt="Project"
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />
    ) : (
      <div className="w-full h-40 bg-gray-200 rounded-t-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">No Image Available</span>
      </div>
    );

  return (
    <section className="mb-16 px-4 md:px-8 my-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Our Clients & Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((project) => (
            <Card
              key={project.id}
              hoverable
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              {renderCardImage(project.image)}
              <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Client:</span> {project.client}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Capacity:</span>{" "}
                {project.capacity}
              </p>
              <p className="text-gray-700">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectListing;
