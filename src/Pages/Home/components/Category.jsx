import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import ca1 from "../../../assets/home/slide1.jpg";
import ca2 from "../../../assets/home/slide2.jpg";
import ca3 from "../../../assets/home/slide3.jpg";
import ca4 from "../../../assets/home/slide4.jpg";
import ca5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"From 11.00 AM to 10.00 PM"}
        mainHeading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-6"
      >
        <SwiperSlide className="relative">
          <img src={ca1} alt="" className="w-full h-auto" />
          <p className="text-3xl uppercase absolute bottom-6 text-center w-full text-white z-10">
            Salad
          </p>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={ca2} alt="" className="w-full h-auto" />

          <p className="text-3xl uppercase absolute bottom-6 text-center w-full text-white z-10">
            Pizza
          </p>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={ca3} alt="" className="w-full h-auto" />

          <p className="text-3xl uppercase absolute bottom-6 text-center w-full text-white z-10">
            Soup
          </p>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={ca4} alt="" className="w-full h-auto" />

          <p className="text-3xl uppercase absolute bottom-6 text-center w-full text-white z-10">
            Desert
          </p>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={ca5} alt="" className="w-full h-auto" />
          <p className="text-3xl uppercase absolute bottom-6 text-center w-full text-white z-10">
            Salad
          </p>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-0"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
