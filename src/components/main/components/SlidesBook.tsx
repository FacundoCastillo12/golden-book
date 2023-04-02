import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";
import LastTenBook from "@/data/books/books";

function SlidesBook() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // when window width is >= 576px
        324: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        576: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerGroup: 5,
          slidesPerView: 5,
        },
      }}
      className=" text-base-content "
    >
      {LastTenBook.map((book) => (
        <SwiperSlide key={`${book.id}-SlidesBooks`} className=" ">
          <div className="m-4 flex flex-col items-center ">
            <figure className="h-[14rem] w-[9rem] overflow-hidden ">
              <img
                className=" origin-center transition ease-in hover:scale-105"
                src={book.cover}
                alt="Book Cover"
              />
            </figure>

            <h3 className=" text-center font-medium text-base-content">
              <Link
                href="/#"
                className="hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
              >
                {book.title}
              </Link>
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlidesBook;
