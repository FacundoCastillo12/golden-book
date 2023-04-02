import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  img: string;
  link: string;
}

export default function CardSlider() {
  const cardWeek: Book[] = [
    {
      id: 1,
      title: "Obra",
      img: "/images/covers/motheroflearning.webp",
      link: "www.google.com",
    },
    {
      id: 2,
      title: "Obra",
      img: "/images/covers/theperfectrun.webp",
      link: "www.google.com",
    },
    {
      id: 3,
      title: "Obra",
      img: "/images/covers/ajourneyofblackandred.webp",
      link: "www.google.com",
    },
  ];
  // Aqui la idea es dismnuir el tamaño. cuando esta en un nivel de xs. Basicamente si es 320 eso se tiene que hacer mas pequeño
  return (
    <Swiper
      effect="cards"
      grabCursor
      modules={[EffectCards]}
      className="m-4 h-[18rem] w-[12rem] xs:h-[21rem] xs:w-[14rem]"
    >
      {cardWeek.map((card) => (
        <SwiperSlide
          className="flex justify-center rounded-2xl bg-cyan-500 text-base font-bold "
          key={`${card.id}-Card`}
        >
          <figure className="relative h-full w-full ">
            <Image
              src={card.img}
              alt="background"
              priority
              fill
              className=" object-scale-down"
            />
          </figure>
          <div className="absolute inset-0 flex items-end  transition ease-in hover:bg-black/25">
            <span className="flex w-full justify-center">
              <button
                type="button"
                className="btn-ghost btn-xs btn text-orange-400 sm:btn-sm md:btn-md lg:btn-lg hover:text-[#FFD700]"
              >
                Ver mas
              </button>
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
