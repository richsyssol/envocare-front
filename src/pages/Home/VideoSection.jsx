import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentWrapper from "@/components/ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/video-section"
        );
        console.log(response, `response video section`);
        setSectionData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video section data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading video section...</div>;
  }

  if (!sectionData) {
    return <div className="text-center py-20">No video section data found</div>;
  }

  return (
    <ContentWrapper>
      <div className="relative mb-10 mt-20">
        {/* Section Heading */}
        <h2 className="text-3xl my-10 md:my-20 text-center sm:text-5xl font-bold text-blue-800">
          {sectionData.title}
        </h2>
        <div className="flex flex-col lg:flex-row md:mx-10 px-10 justify-center items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex flex-col gap-5 "
            >
              <p className="text-md md:text-2xl p-2 text-gray-700">
                {sectionData.paragraph1}
              </p>
              <p className="text-md md:text-2xl p-2 text-gray-700">
                {sectionData.paragraph2}
              </p>
              <p className="text-md md:text-2xl p-2 text-gray-700">
                {sectionData.paragraph3}
              </p>
            </motion.div>
          </div>
          {/* Video Container */}
          <div className="flex-1 mt-10 lg:mt-0 flex w-full h-full justify-center items-center gap-4 overflow-x-auto">
            {/* Conditional Rendering for Video */}
            {sectionData.video_type === "youtube" ? (
              !isPlaying ? (
                <div
                  className="relative mb-4 w-full max-w-lg cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${sectionData.youtube_id}/hqdefault.jpg`}
                    alt="Video Thumbnail"
                    className="w-full h-full rounded-lg object-contain shadow-lg transition-opacity duration-700 hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex w-full justify-center items-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full max-w-lg h-96 rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${sectionData.youtube_id}?autoplay=1`}
                  title="YouTube Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )
            ) : (
              <div className="w-full max-w-lg">
                <video
                  controls
                  className="w-full rounded-lg shadow-lg"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  <source
                    src={`${
                      import.meta.env.VITE_PUBLIC_IMAGE_PATH +
                      `/${sectionData.uploaded_video_path}`
                    }}`}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default VideoSection;
