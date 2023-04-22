import React, { useState } from "react";
import Link from "next/link";
import LastTenBook from "@/data/books/books";
import { IBook } from "@/interface/books";

function LatestReleases() {
  const [selectedBook, setSelectedBook] = useState<IBook>(LastTenBook[0]);

  const handleBookClick = (book: IBook) => {
    setSelectedBook(book);
  };
  return (
    <div className="flex flex-col p-4">
      <div className="m-1 flex flex-nowrap justify-evenly gap-2">
        {LastTenBook.slice(0, 6).map((book) => (
          <button
            key={`${book.id}-Latest Releases`}
            type="button"
            className="h-[100px] border-2 border-transparent focus:border-blue-400 dark:focus:border-yellow-400"
            onClick={() => handleBookClick(book)}
          >
            <img
              className="h-[6rem] w-[5rem]"
              src={book.cover}
              alt="Book Cover"
            />
          </button>
        ))}
      </div>
      <div className="mt-4">
        {selectedBook ? (
          <div className="flex justify-center">
            <img
              className="h-[10rem] w-[6rem] transition ease-in hover:scale-105 xs:h-[12rem] xs:w-[8rem] "
              src={selectedBook.cover}
              alt="Book Cover"
            />
            <div className="ml-2 flex flex-col text-center text-base-content">
              <h2 className="text-lg font-semibold">
                <Link
                  href="/Novel"
                  className=" hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                >
                  {selectedBook.title}
                </Link>
              </h2>
              <h3 className="text-base font-medium opacity-95 ">
                <Link
                  href="/#"
                  className="hover:border-b hover:text-blue-700 dark:border-gray-500 dark:hover:text-yellow-300"
                >
                  {selectedBook.genre[0]}
                </Link>
              </h3>
              <button type="button" className="btn-outline btn-info btn">
                <Link href={selectedBook.url}>Leer</Link>
              </button>
            </div>
          </div>
        ) : (
          <p>Select a book to see details</p>
        )}
      </div>
    </div>
  );
}

export default LatestReleases;
