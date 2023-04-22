import Image from "next/image";
import React, { useState } from "react";
import NovelHeader from "@/components/novel/NovelHeader";
import NovelProfile from "@/components/novel/NovelProfile";
import NovelDescription from "@/components/novel/NovelDescription";
import NovelRecommendation from "@/components/novel/NovelRecommendation";
import NovelListChapter from "@/components/novel/NovelListChapter";
import NovelReview from "@/components/novel/NovelReview";
import NovelListReview from "@/components/novel/NovelListReview";

function Novel() {
  const [isAbout, setIsAbout] = useState(true);

  const handleButtonAbout = () => {
    setIsAbout(true);
  };
  const handleButtonChapter = () => {
    setIsAbout(false);
  };
  // Aqui setea conten con un useState y si es isAbout entonces crea todo el componente de About
  // Viceversa con lo otro
  return (
    <section>
      <div className="relative min-h-screen ">
        <Image
          className="absolute h-full w-full object-cover"
          src="/images/background.webp"
          width={1920}
          height={1080}
          alt="background"
          priority
        />

        <div className="relative mx-auto h-full max-w-[1240px] bg-blue-100 p-4 text-base-content dark:bg-base-100">
          <NovelHeader />
        </div>
        <div className="relative mx-auto flex max-w-[1240px] bg-blue-50 px-4 pt-4 text-base-content dark:bg-base-200">
          <div className="mb-2 flex flex-wrap justify-start gap-2 px-4">
            <button
              type="button"
              className=" btn-info btn"
              onClick={handleButtonAbout}
            >
              About
            </button>
            <button
              type="button"
              className=" btn-success btn"
              onClick={handleButtonChapter}
            >
              Table of Contents
            </button>
          </div>
        </div>
        {isAbout ? (
          <div>
            <div className="relative mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center bg-blue-50 p-4 text-base-content dark:bg-base-200">
              <div className=" flex flex-col gap-1 p-2 sm:flex-row">
                <NovelDescription />
                <div className="p-2" />
                <NovelProfile />
              </div>
            </div>
            <div className="relative mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center bg-blue-50 px-6 text-base-content dark:bg-base-200">
              <div className="w-full bg-base-100 dark:bg-gray-900">
                <h3 className="text-center text-lg font-bold text-base-content">
                  Historias que pueden gustarte
                </h3>
              </div>
              <div className=" flex w-full flex-row bg-base-100  dark:bg-gray-900 ">
                <NovelRecommendation />
              </div>
            </div>
            <div className="relative mx-auto flex h-full max-w-[1240px] flex-col items-center justify-center bg-blue-50 p-4 text-base-content dark:bg-base-200">
              <div className=" flex w-full flex-col px-2 sm:flex-row ">
                <div className=" flex basis-full flex-col bg-base-100 p-2 dark:bg-gray-900">
                  <NovelReview />
                </div>
              </div>
              <div className="p-2" />
              <div className=" flex w-full flex-col px-2 sm:flex-row ">
                <div className=" flex basis-full flex-col bg-base-100 p-2 dark:bg-gray-900">
                  <NovelListReview />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <NovelListChapter />
          </div>
        )}
      </div>
    </section>
  );
}

export default Novel;
