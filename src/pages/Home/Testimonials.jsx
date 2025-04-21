import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // const response = await axios.get(
        //   "https://envocare.demovoting.com/api/testimonials"
        // );
        const response = await axios.get(
          "http://127.0.0.1:8000/api/testimonials"
        );
        console.log(response, `response testimonials section`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
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

  return (
    <section className="max-container bg-blue-50 py-24 w-full text-gray-700 transition-opacity duration-700 ease-in-out opacity-100 hover:opacity-90">
      <h3 className="font-palanquin text-center text-2xl md:text-4xl font-bold">
        What Our
        <span className="m-2 bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          Customers
        </span>
        Say?
      </h3>
      <p className="info-text text-md md:text-lg text-center m-auto mt-4 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-xl mx-auto mb-12 mt-6"
      >
        {reviews &&
          reviews?.map((review, index) => (
            <SwiperSlide
              key={index}
              className="w-full bg-gray-100 rounded-lg text-center"
            >
              <ReviewCard
                // imgURL={`https://envocare.demovoting.com/storage/app/public/${review.image_url}`}
                //  Prepend base URL
                imgURL={`http://127.0.0.1:8000/storage/${review.image_url}`}
                customerName={review.customer_name}
                rating={review.rating}
                feedback={review.feedback}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex mt-16 justify-center items-center flex-wrap gap-10"></div>
    </section>
  );
};

export default Testimonials;
