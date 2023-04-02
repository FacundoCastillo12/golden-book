import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function CoverFlowCards() {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      loop
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      modules={[EffectCoverflow, Pagination]}
      className="  mySwiper rounded-lg bg-white py-6"
    >
      <SwiperSlide className="h-96 w-96  bg-cover bg-center">
        <img
          className=" block h-32 w-full "
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
      <SwiperSlide className="h-96 w-96 bg-cover bg-center">
        <img
          className=" block h-32 w-full "
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
      <SwiperSlide className="h-96 w-96 bg-cover bg-center">
        <img
          className=" block h-32 w-full "
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          alt="Imagen 1"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default CoverFlowCards;
