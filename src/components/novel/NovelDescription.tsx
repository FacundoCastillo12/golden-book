import React from "react";
import LastTenBook from "@/data/books/books";

function NovelDescription() {
  return (
    <div className=" flex basis-3/4 flex-col gap-2 bg-base-100 p-2 dark:bg-gray-900">
      <div>
        <h2 className="text-left text-2xl font-semibold">Sypnosis</h2>
      </div>
      <div>
        <p>{LastTenBook[0].description}</p>
      </div>
      <div>
        <h3 className=" text-lg font-semibold">Genre</h3>
        <div className="flex flex-wrap gap-1">
          <button type="button" className="btn-outline btn-info btn-sm btn  ">
            Fantasy
          </button>
        </div>
      </div>
    </div>
  );
}

export default NovelDescription;
