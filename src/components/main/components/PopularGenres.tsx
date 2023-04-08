import React, { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";
import LastTenBook from "@/data/books/books";

function PopularGenres() {
  const [selectedGenre, setSelectedGenre] = useState<string>("Fantasy");

  function filterBooksByGenre(genre: string) {
    return LastTenBook.filter((book) => book.genre.includes(genre));
  }

  function handleGenreClick(genre: string) {
    setSelectedGenre(genre);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-1 p-4">
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Fantasy")}
        >
          Fantasy
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Action")}
        >
          Action
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Adventure")}
        >
          Adventure
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Mystery")}
        >
          Mystery
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Sci-fi")}
        >
          Sci-fi
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Romance")}
        >
          Romance
        </button>
        <button
          type="button"
          className="btn-outline btn-primary btn"
          onClick={() => handleGenreClick("Comedy")}
        >
          Comedy
        </button>
      </div>
      <div>
        {selectedGenre ? (
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
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
            {filterBooksByGenre(selectedGenre).map((book) => (
              <SwiperSlide key={`${book.id}-SlidesBooks`}>
                <div className="m-4 flex h-[18rem] flex-col  items-center">
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
        ) : (
          <p>Select a genre to see books</p>
        )}
      </div>
    </div>
  );
}

export default PopularGenres;
