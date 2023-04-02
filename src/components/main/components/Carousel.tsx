import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import Image from "next/image";

// Aqui, quiero ver si creo para el admin un tipo creacion de notificaciones.
// La idea es que aqui, recibe las notificaciones y la mapea. -Ver si aqui se crea la carpeta
// Carousel para guardar el texto dentro como notificaciones o si se deja asi nomas.
function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <div className="flex h-full w-full flex-wrap justify-center bg-base-100 text-base-content">
          <figure className="relative h-[210px] w-[600px] sm:h-[420px] sm:w-[1215px]">
            <Image
              src="/images/backgroundnoti.webp"
              alt="background"
              priority
              fill
              className=" object-cover"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="p-8">
              <h2 className=" text-4xl font-bold text-white">
                Aviso importante!
              </h2>
              <p className="text-base font-medium text-white">
                Estamos en mantenimiento
              </p>
              <button
                type="button"
                className="btn-ghost btn text-white dark:hover:text-[#FFD700]"
              >
                Conocer mas
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-wrap justify-center bg-base-100 text-base-content">
          <figure className="relative h-[210px] w-[600px] sm:h-[420px] sm:w-[1215px]">
            <Image
              src="/images/backgroundnoti2.webp"
              alt="background"
              priority
              fill
              className=" object-cover"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="p-8">
              <h2 className=" text-4xl font-bold text-white">
                Aviso importante!
              </h2>
              <p className="text-base font-medium text-white">
                Estamos en mantenimiento
              </p>
              <button
                type="button"
                className="btn-ghost btn text-white dark:hover:text-[#FFD700]"
              >
                Conocer mas
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full w-full flex-wrap justify-center bg-base-100 text-base-content">
          <figure className="relative h-[210px] w-[600px] sm:h-[420px] sm:w-[1215px]">
            <Image
              src="/images/city.webp"
              alt="background"
              priority
              fill
              className=" object-cover"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="p-8">
              <h2 className=" text-4xl font-bold text-white">
                Aviso importante!
              </h2>
              <p className="text-base font-medium text-white">
                Estamos en mantenimiento
              </p>
              <button
                type="button"
                className="btn-ghost btn text-white dark:hover:text-[#FFD700]"
              >
                Conocer mas
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;

/*

function Carousel() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-500">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-800">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-900">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-100">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-200">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-300">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-400">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap justify-center bg-slate-500">
            <div className=" h-96 w-96 text-center">
              <p>Hola para probar</p>
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <div>1</div>
          </div>
          <div className="swiper-button-next slider-arrow">
            <div>1</div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
*/
