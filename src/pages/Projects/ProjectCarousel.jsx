import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = ({ data }) => {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 my-20">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <img
                src={`http://127.0.0.1:8000/storage/${item.image}`}
                alt={item.name || `Project ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              {item.name && (
                <p className="text-center mt-2 font-medium">{item.name}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
