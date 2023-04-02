import Image from "next/image";
import React from "react";
import CardSlider from "./components/CardSlider";
import Carousel from "./components/Carousel";
import LastUpdateList from "./components/LastUpdateList";
import LatestReleases from "./components/LatestReleases";
import MustReadsBooks from "./components/MustReadsBooks";
import PopularGenres from "./components/PopularGenres";
import SlidesBook from "./components/SlidesBook";
import TopRankingList from "./components/TopRankingList";

function Main() {
  return (
    <section>
      <div className="relative">
        <Image
          className="absolute h-full w-full object-cover"
          src="/images/background.webp"
          width={1920}
          height={1080}
          alt="background"
          priority
        />

        <div className="relative mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center bg-blue-50 p-4 dark:bg-base-200">
          <div className="mt-4 w-[98%] items-center justify-center bg-blue-50 dark:bg-base-200">
            <div className=" ">
              <div className="">
                <Carousel />
              </div>
              <div className="mt-6 flex flex-col flex-wrap justify-evenly bg-base-100 dark:bg-gray-900 sm:flex-row">
                <div className="grid grow basis-full sm:basis-2/5">
                  <h3 className="text-center text-lg font-bold text-base-content">
                    Recomendaciones del dia
                  </h3>
                  <CardSlider />
                </div>
                <div className="divider divider-vertical border-none bg-blue-50 p-3 sm:divider-horizontal before:bg-transparent after:bg-transparent dark:bg-base-200" />
                <div className="grid grow basis-full sm:basis-2/5">
                  <h3 className="text-center text-lg font-bold text-base-content">
                    Recomendaciones del editor
                  </h3>
                  <CardSlider />
                </div>
              </div>
            </div>
          </div>
          <div />
          <div className="mt-6 w-[98%] items-center justify-center bg-base-100 dark:bg-gray-900 ">
            <div className=" flex flex-col sm:flex-row">
              <LastUpdateList />
              <div className="divider divider-vertical bg-blue-50 px-3 sm:divider-horizontal before:bg-transparent after:bg-transparent dark:bg-base-200" />
              <TopRankingList />
            </div>
          </div>
          <div className="mt-6 w-[98%] items-center justify-center bg-base-100 dark:bg-gray-900 ">
            <h3 className="text-center text-lg font-bold text-base-content">
              Mejores de la Semana
            </h3>
            <div className=" ">
              <SlidesBook />
            </div>
          </div>
          <div className="mt-6 mb-2 w-[98%] items-center justify-center bg-base-100 dark:bg-gray-900 ">
            <div className="flex flex-col md:flex-row">
              <div className="basis-full md:basis-3/5 ">
                <h3 className="text-center text-lg font-bold text-base-content">
                  Latest Releases
                </h3>
                <LatestReleases />
              </div>
              <div className="divider divider-vertical bg-blue-50 px-3 md:divider-horizontal before:bg-transparent after:bg-transparent dark:bg-base-200" />
              <div className="basis-2/5">
                <h3 className="text-center text-lg font-bold text-base-content">
                  Must-Reads
                </h3>
                <MustReadsBooks />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-2 w-[98%] items-center justify-center bg-base-100 dark:bg-gray-900 ">
            <div className="">
              <h3 className="text-center text-lg font-bold text-base-content">
                Popular Genres
              </h3>
              <PopularGenres />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
