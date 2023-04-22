import React from "react";
import Link from "next/link";
import LastTenBook from "@/data/books/books";

function MustReadsBooks() {
  return (
    <div>
      <div className="flex flex-wrap justify-between p-4">
        {LastTenBook.slice(0, 6).map((book) => (
          <div key={`${book.id}-MustRead`} className="flex basis-2/4 p-1 ">
            <img
              className="h-[6rem] w-[4rem] origin-center transition ease-in hover:scale-105"
              src={book.cover}
              alt="Book Cover"
            />
            <div className="mx-1 flex flex-col text-base-content">
              <h3 className="overflow-hidden text-ellipsis text-base font-semibold">
                <Link
                  href="/Novel"
                  className="hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                >
                  {book.title}
                </Link>
              </h3>
              <h4 className=" opacity-75">
                <Link
                  href="/#"
                  className="hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                >
                  {book.genre[0]}
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MustReadsBooks;
