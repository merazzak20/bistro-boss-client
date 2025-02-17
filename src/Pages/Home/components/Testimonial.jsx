import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(reviews);
  useEffect(() => {
    const fetchReview = async () => {
      const res = await axiosPublic.get("/reviews");
      setReviews(res?.data);
    };
    fetchReview();
  }, [axiosPublic]);

  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        mainHeading={"Testimonials"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 text-center flex items-center flex-col justify-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-orange-400 text-xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
