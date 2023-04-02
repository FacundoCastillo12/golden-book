import React from "react";
import Link from "next/link";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastTenBook from "@/data/books/books";

function TopRankingList() {
  return (
    <div className="basis-full">
      <div className="m-4 bg-base-100 p-3 text-center text-base-content dark:bg-gray-900">
        <div className=" border-b border-slate-300 dark:border-gray-700">
          <h2 className="mb-1 text-lg font-bold capitalize text-base-content">
            Top ranking
          </h2>
        </div>
        <div>
          <ul>
            {LastTenBook.map((book) => (
              <li
                key={`${book.id}-TopRanking`}
                className="flex flex-row border-b border-slate-300 p-4 dark:border-gray-700"
              >
                <div className="h-20 w-16">
                  <Link href="/#" className="h-full w-full cursor-pointer">
                    <img
                      className="h-full w-full transition ease-in hover:scale-105"
                      src={book.cover}
                      alt="Book Cover"
                    />
                  </Link>
                </div>
                <div className="ml-2 flex basis-full flex-col text-left font-bold">
                  <h2>
                    <Link
                      href="/#"
                      className="cursor-pointer border-gray-300 text-lg capitalize hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                    >
                      {book.title}
                    </Link>
                  </h2>
                  <div>
                    <p className=" font-semibold">
                      <Link
                        href="/#"
                        className="cursor-pointer hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                      >
                        {book.genre[0]}
                      </Link>
                    </p>
                  </div>
                  <div className="m-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      className=" text-orange-400"
                    />
                    <span className="text-md font-bold opacity-75">
                      {book.rating}
                    </span>
                  </div>
                  <div className="text-base-content" />
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <button type="button" className="btn-outline btn">
              Ver otras mejores historias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRankingList;
