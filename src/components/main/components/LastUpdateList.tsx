import Link from "next/link";
import React from "react";
import LastTenBook from "@/data/books/books";

function LastUpdateList() {
  return (
    <div className="basis-full">
      <div className="m-4 bg-base-100 p-3 text-center text-base-content dark:bg-gray-900">
        <div className=" border-b border-slate-300 dark:border-gray-700">
          <h2 className="mb-1 text-lg font-bold capitalize text-base-content">
            Ultimas Actualizaciones
          </h2>
        </div>
        <div>
          <ul>
            {LastTenBook.map((book) => (
              <li
                key={`${book.id}-LastUpdate`}
                className="flex flex-row border-b border-slate-300 p-4 dark:border-gray-700"
              >
                <div className="h-20 w-16">
                  <Link href="/#" className="h-full w-full cursor-pointer">
                    <img
                      className="h-full w-full transition ease-in hover:scale-105"
                      src={book.cover}
                      alt={book.title}
                    />
                  </Link>
                </div>
                <div className=" ml-2 flex basis-full flex-col text-left">
                  <h2>
                    <Link
                      href="/#"
                      className="cursor-pointer border-gray-300 text-base font-medium capitalize hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                    >
                      {book.title}
                    </Link>
                  </h2>
                  <div className="flex flex-col-reverse">
                    {book.lastChapter.map((chapter) => (
                      <div
                        key={`${chapter.chapterTitle}${book.id}`}
                        className="text-base-content"
                      >
                        <p className="cursor-pointer text-sm ">
                          <Link
                            href={chapter.linkToChapter}
                            className=" border-gray-300 hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300 "
                          >
                            {chapter.chapterTitle}
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <button type="button" className="btn-outline btn">
              Mas actualizaciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastUpdateList;
